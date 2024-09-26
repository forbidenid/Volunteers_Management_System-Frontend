from datetime import datetime

from slugify import slugify
from sqlalchemy import event, Column, Integer, ForeignKey, UniqueConstraint

from vms_api.factory import db


class Tag(db.Model):
    __tablename__ = 'tags'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    slug = db.Column(db.String(), index=True, unique=True)
    description = db.Column(db.String())
    created_at = db.Column(db.DateTime(), default=datetime.utcnow, index=True)
    updated_at = db.Column(db.DateTime())

    def __repr__(self):
        return self.name

    def get_summary(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image_urls': [image.file_path.replace('\\', '/') for image in self.images]
        }


@event.listens_for(Tag.name, 'set')
def receive_set(target, value, oldvalue, initiator):
    target.slug = slugify(unicode(value))


class GigTag(db.Model):
    __tablename__ = 'gigs_tags'

    gig_id = Column(Integer, ForeignKey("gigs.id"), nullable=False)
    tag_id = Column(Integer, ForeignKey("tags.id"), nullable=False)

    gig = db.relationship("Gig", foreign_keys=[gig_id], backref='gig_tags')
    tag = db.relationship("Tag", foreign_keys=[tag_id], backref='gig_tags')

    __mapper_args__ = {'primary_key': [gig_id, tag_id]}
    __table_args__ = (UniqueConstraint('gig_id', 'tag_id', name='same_tag_for_same_gig'),)


gigs_tags = db.Table(
    'gigs_tags',
    db.Column('gig_id', db.Integer, db.ForeignKey('gigs.id')),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id')),
    keep_existing=True
)
