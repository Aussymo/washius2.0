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
    name = db.Column(db.String(120), unique=True, nullable=False)
    date = db.Column(db.String(80), unique=True, nullable=False)
    date_completed= db.Column(db.String(120), unique=False, nullable=False)
    company= db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<Events {self.name}>'

    def serialize(self):
        return{
            "event_id" : self.event_id,
            "name" : self.name,
            "date" : self.date,
            "date_completed" : self.date_completed,
            "company" : self.company
        }

# class Schedule(db.Model):
#     schedule_id = db.Column(db.Integer, primary_key=True)
#     full_name = db.Column(db.String(80), unique=True, nullable=True)
#     monday_start = db.Column(db.String(120), unique=False, nullable=False)
#     monday_end = db.Column(db.String(120), unique=False, nullable=False)
#     tuesday_start = db.Column(db.String(120), unique=False, nullable=False)
#     tuesday_end = db.Column(db.String(120), unique=False, nullable=False)
#     wednesday_start = db.Column(db.String(120), unique=False, nullable=False)
#     wednesday_end = db.Column(db.String(120), unique=False, nullable=False)
#     thursday_start = db.Column(db.String(120), unique=False, nullable=False)
#     thursday_end = db.Column(db.String(120), unique=False, nullable=False)
#     friday_start = db.Column(db.String(120), unique=False, nullable=False)
#     friday_end = db.Column(db.String(120), unique=False, nullable=False)
#     saturday_start = db.Column(db.String(120), unique=False, nullable=False)
#     saturday_end = db.Column(db.String(120), unique=False, nullable=False)
#     sunday_start = db.Column(db.String(120), unique=False, nullable=False)
#     sunday_end = db.Column(db.String(120), unique=False, nullable=False)
    


#     def __repr__(self):
#         return f'<Schedule {self.full_name}>'

#     def serialize(self):
#         return{
#             "schedule_id" : self.schedule_id,
#             "full_name" : self.full_name,
#             "sunday_start" : self.sunday_start,
#             "sunday_end" : self.sunday_end,
#             "monday_start" : self.monday_start,
#             "monday_end" : self.monday_end,
#             "tuesday_start" : self.tuesday_start,
#             "tuesday_end" : self.tuesday_end,
#             "wednesday_start" : self.wednesday_start,
#             "wednesday_end" : self.wednesday_end,
#             "thursday_start" : self.thursday_start,
#             "thursday_end" : self.thursday_end,
#             "friday_start" : self.friday_start,
#             "friday_end" : self.friday_end,
#             "saturday_start" : self.saturday_start,
#             "saturday_end" : self.saturday_end,
#         }


class GhostCar(db.Model):
    ghostcar_id = db.Column(db.Integer, primary_key=True)
    conveyor_starts = db.Column(db.String(80), unique=True, nullable=False)
    roller_up = db.Column(db.String(80), unique=True, nullable=False)
    presoak = db.Column(db.String(80), unique=True, nullable=False)
    scented_spray = db.Column(db.String(80), unique=True, nullable=False)
    cta = db.Column(db.String(80), unique=True, nullable=False)
    fusion_bath = db.Column(db.String(80), unique=True, nullable=False)
    tire_brushes = db.Column(db.String(80), unique=True, nullable=False)
    side_blasters = db.Column(db.String(80), unique=True, nullable=False)
    top_brush = db.Column(db.String(80), unique=True, nullable=False)
    wrap_set1 = db.Column(db.String(80), unique=True, nullable=False)
    fusion_prime = db.Column(db.String(80), unique=True, nullable=False)
    wrap_set2 = db.Column(db.String(80), unique=True, nullable=False)
    bumper_blaster = db.Column(db.String(80), unique=True, nullable=False)
    second_cta = db.Column(db.String(80), unique=True, nullable=False)
    girll_brushes = db.Column(db.String(80), unique=True, nullable=False)
    top_omni = db.Column(db.String(80), unique=True, nullable=False)
    side_omni = db.Column(db.String(80), unique=True, nullable=False)
    fusion_wax = db.Column(db.String(80), unique=True, nullable=False)
    ceramic_shine = db.Column(db.String(80), unique=True, nullable=False)
    topbrush2 = db.Column(db.String(80), unique=True, nullable=False)
    fusion_rinse = db.Column(db.String(80), unique=True, nullable=False)
    fusion_seal = db.Column(db.String(80), unique=True, nullable=False)
    rain_repel = db.Column(db.String(80), unique=True, nullable=False)
    clear_coat = db.Column(db.String(80), unique=True, nullable=False)
    tire_shine = db.Column(db.String(80), unique=True, nullable=False)
    dryers = db.Column(db.String(80), unique=True, nullable=False)
    mammoth_ears = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return f'<Ghostcar {self.ghostcar_id}>'

    def serialize(self):
        return{
            "ghostcar_id": self.ghostcar_id,
            "conveyor_starts": self.conveyor_starts,
            "roller_up": self.roller_up,
            "presoak": self.presoak, 
            "scented_spray": self.scented_spray, 
            "cta": self. cta,
            "fusion_bath": self.fusion_bath,
            "tire_brushes": self.tire_brushes, 
            "side_blasters": self.side_blasters,
            "top_brush": self.top_brush,
            "wrap1_ds_ps": self.wrap1_ds_ps, 
            "fusion_prime": self.fusion_prime, 
            "wrap2_ds_ps": self.wrap2_ds_ps,
            "bumper_blaster": self.bumper_blaster, 
            "second_cta": self.second_cta, 
            "girll_brushes": self.girll_brushes,
            "top_omni": self.top_omni,
            "side_omni": self.side_omni, 
            "fusion_wax": self.fusion_wax,
            "ceramic_shine": self.ceramic_shine, 
            "topbrush2": self.topbrush2, 
            "fusion_rinse": self.fusion_rinse,
            "fusion_seal": self.fusion_seal, 
            "rain_repel": self.rain_repel, 
            "clear_coat": self.clear_coat, 
            "tire_shine": self.tire_shine,
            "dryers": self.dryers,
            "mammoth_ears": self.mammoth_ears   
        }
    