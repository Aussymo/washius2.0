from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(80), unique=True, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

# class Events(db.Model):
#     Event_id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120), unique=True, nullable=False)
#     date = db.Column(db.String(80), unique=True, nullable=False)
#     date_completed= db.Column(db.String(120), unique=False, nullable=False)
#     company= db.Column(db.String(120), unique=False, nullable=False)
    


    def __repr__(self):
        return f'<User {self.email}>'
        

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "phone_number": self.phone_number
            # do not serialize the password, its a security breach
        }