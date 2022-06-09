from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    full_name = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(80), unique=True, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'
        

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "phone_number": self.phone_number
            # do not serialize the password, its a security breach
        }

class Events(db.Model):
    event_id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=True, nullable=False)
    date = db.Column(db.String(80), unique=True, nullable=False)
    date_completed= db.Column(db.String(120), unique=False, nullable=False)
    company= db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<Events {self.name}>'

    def serialize(self):
        return{
            "event_id" : self.event_id,
            "full_name" : self.full_name,
            "date" : self.date,
            "date_completed" : self.date_completed,
            "company" : self.company
        }

class Schedule(db.Model):
    schedule_id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(80), unique=True, nullable=False)
    day = db.Column(db.String(120), unique=True, nullable=False)
    start_time = db.Column(db.String(120), unique=True, nullable=False)
    end_time = db.Column(db.String(120), unique=True, nullable=False)


    def __repr__(self):
        return f'<Schedule {self.full_name}>'

    def serialize(self):
        return{
            "schedule_id" : self.schedule_id,
            "full_name" : self.full_name,
            "day" : self.day,
            "start_time" : self.start_time,
            "end_time" : self.end_time
        }