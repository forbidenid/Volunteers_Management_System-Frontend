from datetime import datetime

from flask_jwt_extended import current_user
from slugify import slugify
from sqlalchemy import event
from sqlalchemy.orm import relationship

from vms_api.factory import db
from categories.models import gigs_categories
from tags.models import gigs_tags


class Gig(db.Model):
    __tablename__ = 'gigs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    slug = db.Column(db.String, index=True, unique=True)
    description = db.Column(db.Text, nullable=False)

 

    created_at = db.Column(db.DateTime(), default=datetime.utcnow, index=True, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    publish_on = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    tags = relationship('Tag', secondary=gigs_tags, backref='gigs')
    categories = relationship('Category', secondary=gigs_categories, backref='gigs')

    comments = relationship('Comment', backref='gig', lazy='dynamic')

    def __repr__(self):
        return '<Gig %r>' % self.name

    def __str__(self):
        return '<Gig {}>'.format(self.name)

    def get_summary(self):
        return {
            'id': self.id,
            'name': self.name,
            'slug': self.slug,
            'comments_count': self.comments.count(),
            'tags': [{'id': t.id, 'name': t.name} for t in self.tags],
            'categories': [{'id': c.id, 'name': c.name} for c in self.categories],
            'image_urls': [i.file_path for i in self.images]
        }


@event.listens_for(Gig.name, 'set')
def receive_set(target, value, oldvalue, initiator):
    target.slug = slugify(unicode(value))
