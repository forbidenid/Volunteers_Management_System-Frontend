from datetime import datetime

from sqlalchemy.orm import relationship

from vms_api.factory import db


class FileUpload(db.Model):
    __tablename__ = 'file_uploads'
    id = db.Column('id', db.Integer, primary_key=True)
    type = db.Column('type', db.String(15))  # this will be our discriminator

    file_path = db.Column(db.String, nullable=False)
    file_name = db.Column(db.String, nullable=False)
    file_size = db.Column(db.Integer, nullable=False)
    original_name = db.Column(db.String, nullable=False)

    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    __mapper_args__ = {
        'polymorphic_on': type,
        'polymorphic_identity': 'FileUpload'
    }


class TagImage(FileUpload):
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), nullable=True)
    tag = relationship('Tag', backref='images')

    __mapper_args__ = {
        'polymorphic_identity': 'TagImage'
    }


class GigImage(FileUpload):
    gig_id = db.Column(db.Integer, db.ForeignKey('gigs.id'), nullable=True)
    gig = relationship('Gigs', backref='images')

    __mapper_args__ = {
        'polymorphic_identity': 'GigImage'
    }


class CategoryImage(FileUpload):
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=True)
    category = relationship('Category', backref='images')

    __mapper_args__ = {
        'polymorphic_identity': 'CategoryImage'
    }
