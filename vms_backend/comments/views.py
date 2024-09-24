from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_claims, current_user
from sqlalchemy import desc

from ecommerce_api.factory import db
from gigs.models import Gig
from comments.models import Comment
from comments.serializers import CommentListSerializer, CommentDetailsSerializer
from routes import blueprint
from shared.serializers import get_success_response, get_error_response


@blueprint.route('/gigs/<gig_slug>/comments', methods=['GET'])
def list_comments(gig_slug):
    page_size = request.args.get('page_size', 5)
    page = request.args.get('page', 1)
    gig_id = Gig.query.filter_by(slug=gig_slug).with_entities('id').first()[0]
    comments = Comment.query.filter_by(gig_id=gig_id).order_by(desc(Comment.created_at)).paginate(page=page,
                                                                                                          per_page=page_size)
    return jsonify(CommentListSerializer(comments, include_user=True).get_data()), 200


@blueprint.route('/comments/<comment_id>', methods=['GET'])
def show_comment(comment_id):
    comment = Comment.query.get(comment_id)
    return jsonify(CommentDetailsSerializer(comment).data), 200


@blueprint.route('/gigs/<gig_slug>/comments', methods=['POST'])
@jwt_required
def create_comment(gig_slug):
    content = request.json.get('content')

    # claims = get_jwt_claims()
    # user_id = claims.get('user_id')
    # user_id = get_jwt_identity()
    # user = current_user

    claims = get_jwt_claims()
    user_id = claims.get('user_id')
    gig_id = db.session.query(Gig.id).filter_by(slug=gig_slug).first()[0]
    comment = Comment(content=content, user_id=user_id, gig_id=gig_id)

    db.session.add(comment)
    db.session.commit()

    return get_success_response(data=CommentDetailsSerializer(comment).data, messages='Comment created successfully')


@blueprint.route('/comments/<comment_id>', methods=['PUT'])
@jwt_required
def update_comment(comment_id):
    # comment = Comment.query.get_or_404(comment_id)
    comment = Comment.query.get(comment_id)
    if comment is None:
        return get_error_response(messages='not found', status_code=404)

    if current_user.is_admin() or comment.user_id == current_user.id:
        content = request.json.get('content')
        rating = request.json.get('rating')

        if content:
            comment.content = content
        if rating:
            comment.rating = rating

        db.session.commit()
        return get_success_response(data=CommentDetailsSerializer(comment).data,
                                    messages='Comment updated successfully')
    else:
        return get_error_response('Permission denied, you can not update this comment', status_code=401)


@blueprint.route('/comments/<comment_id>', methods=['DELETE'])
@jwt_required
def destroy_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if comment is None:
        return get_error_response('Comment not found', status_code=404)

    if current_user.is_admin() or comment.user_id == current_user.id:
        db.session.delete(comment)
        db.session.commit()
        return get_success_response('Comment deleted successfully')
    else:
        return get_error_response('Permission denied, you can not delete this comment', status_code=401)
