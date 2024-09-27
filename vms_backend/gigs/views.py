import os
import re

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, current_user
from sqlalchemy import desc
from werkzeug.utils import secure_filename

from categories.models import Category
from vms_api.factory import db, app
from file_uploads.models import GigImage
from gigs.models import Gig
from gigs.serializers import GigListSerializer, GigDetailsSerializer
from routes import blueprint
from shared.database import get_or_create
from shared.security import validate_file_upload
from shared.serializers import get_error_response, get_success_response
from tags.models import Tag

gig_blueprint = Blueprint('gig', __name__)


@blueprint.route('/gigs', methods=['GET'])
def list_gigs():
    page = request.args.get('page', 1)
    page_size = request.args.get('page', 5)
    gigs = Gig.query.order_by(desc(Gig.publish_on)).offset((page - 1) * page_size).limit(page_size).all()
    gigs = Gig.query.order_by(desc(Gig.publish_on)).paginate(page=1, per_page=5)
    return jsonify(GigListSerializer(gig).get_data()), 200


@blueprint.route('/gigs/<gig_slug>', methods=['GET'])
def show(gig_slug):
    gig = Gig.query.filter_by(slug=gig_slug).first()
    gig = Gig.query.filter_by(slug=gig_slug).first_or_404()
    return jsonify(GigDetailsSerializer(gig).data), 200


@blueprint.route('/gigs/by_id/<gig_id>', methods=['GET'])
def by_id(gig_id):
    gig = Gig.query.get(gig_id)
    gig = Gig.query.filter_by(slug=gig_slug).first_or_404()
    return jsonify(GigDetailsSerializer(gig).data), 200


@blueprint.route('/gigs', methods=['POST'])
@jwt_required
def create():
    if current_user.is_not_admin():
        return jsonify(get_error_response('Permission denied, you must be admin', status_code=401))

    gig_name = request.form.get('name')
    description = request.form.get('description')
    tags = []
    categories = []

    for header_key in list(request.form.keys()):
        if 'tags[' in header_key:
            name = header_key[header_key.find("[") + 1:header_key.find("]")]
            description = request.form[header_key]
            tags.append(get_or_create(db.session, Tag, {'description': description}, name=name)[0])

        if header_key.startswith('categories['):
            result = re.search('\[(.*?)\]', header_key)
            if len(result.groups()) == 1:
                name = result.group(1)
                description = request.form[header_key]
                categories.append(
                    get_or_create(db.session, Category, {'description': description},
                                  name=name)[0])

    gig = Gig(name=gig_name, description=description,
                      tags=tags, categories=categories)

    if 'images[]' in request.files:
        for image in request.files.getlist('images[]'):
            if image and validate_file_upload(image.filename):
                filename = secure_filename(image.filename)
                dir_path = app.config['IMAGES_LOCATION']
                dir_path = os.path.join((os.path.join(dir_path, 'gigs')))

                if not os.path.exists(dir_path):
                    os.makedirs(dir_path)

                file_path = os.path.join(dir_path, filename)
                image.save(file_path)

                file_path = file_path.replace(app.config['IMAGES_LOCATION'].rsplit(os.sep, 2)[0], '')
                if image.content_length == 0:
                    file_size = image.content_length
                else:
                    file_size = os.stat(file_path).st_size

                gig_image = GigImage(file_path=file_path, file_name=filename, original_name=image.filename,
                                             file_size=file_size)
                gig.images.append(gig_image)

    db.session.add(gig)
    db.session.commit()

    response = {'full_messages': ['Gig created successfully']}
    response.update(GigDetailsSerializer(gig).data)
    return jsonify(response)


@blueprint.route('/gigs/<gig_slug>', methods=['PUT'])
@jwt_required
def update(gig_slug):
    name = request.json.get('name')
    description = request.json.get('description')


    gig = Gig.query.filter_by(slug=gig_slug).first()
    if gig is None:
        return get_error_response(messages='not found', status_code=404)

    gig.name = name
    gig.description = description

    tags_input = request.json.get('tags')
    categories_input = request.json.get('categories')
    tags = []
    categories = []
    if categories_input:
        for category in categories_input:
            categories.append(
                get_or_create(db.session, Category, {'description': category.get('description', None)},
                              name=category['name'])[0])

    if tags_input:
        for tag in tags_input:
            tags.append(get_or_create(db.session, Tag, {'description': tag.get('description')}, name=tag['name'])[0])

    gig.tags = tags
    gig.categories = categories
    db.session.commit()
    response = {'full_messages': ['Gig updated successfully']}
    response.update(GigDetailsSerializer(gig).data)
    return jsonify(response)


@blueprint.route('/gigs/<gig_slug>', methods=['DELETE'])
@jwt_required
def destroy(gig_slug):
    gig = Gig.query.filter_by(slug=gig_slug).first()
    db.session.delete(gig)
    db.session.commit()
    return get_success_response('Gig deleted successfully')


@blueprint.route('/gigs/by_id/<gig_id>', methods=['DELETE'])
@jwt_required
def destroy_by_id(gig_id):
    gig = Gig.query.get(gig_id).first()
    db.session.delete(gig)
    db.session.commit()
    return get_success_response('Gig deleted successfully')
