from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/private', methods=['POST'])
def private():
    secret_key = "fahgkjhasgh"
    authentication = request.headers.get("authentication")

    if authentication == "":
        return jsonify("You are not logged in")
    elif authentication == secret_key:
        return jsonify("You are logged in")

# This is my login route
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"Message": "User not found"}), 401
    if password != user.password:
        return jsonify({"Message": "Please check your info"})
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)
    print(access_token)

@api.route("/user/active", methods=["POST"])
def active_user():
    print("Active user")
    body=request.get_json()
    one_user = User.query.filter_by(email=body["email"]).first()
    return jsonify(one_user.serialize()), 200

# this is my signup route
@api.route("/user", methods=["POST"])
def create_user():
    body = request.get_json()
    email = body["email"]
    password = body["password"]
    full_name = body["full_name"]
    phone_number = body["phone_number"]
    user = User(email=email, password=password, full_name=full_name, phone_number=phone_number)

    db.session.add(user)
    db.session.commit()
    
    return (jsonify(user.serialize())), 201

@api.route('/user', methods=['GET'])
def get_user():
    users = User.query.all()
    all_users = list(map(lambda user: user.serialize(), users))
    
    return jsonify(all_users), 200



@api.route("/GhostCar", methods=["POST"])
def create_ghostcar():
    body = request.get_json()
    Conveyor_start = body["Conveyor_start"]
    Undercarriage = body["Undercarriage"]
    Pre_soak = body["Pre_soak"]
    windshield_spray = body["windshield_spray"]
    Scented_spray = body["Scented_spray"]
    cta = body["cta"]
    Fusion_bath = body["Fusion_bath"]
    Tire_brushes = body["Tire_brushes"]
    Side_blasters= body["Side_blasters"]
    top_brush = body["top_brush"]
    Wrap_set1 = body["Wrap_set1"]
    Fusion_prime = body["Fusion_prime"]
    wrap_set2 = body["wrap_set2"]
    Bumper_blast = body["Bumper_blast"]
    cta2 = body["cta2"]
    Grill_brushes= body["Grill_brushes"]
    Top_Omni = body["Top_Omni"]
    Side_omnis = body["Side_omnis"]
    Fusion_wax = body["Fusion_wax"]
    Ceramic_shine = body["Ceramic_shine"]
    Top_brush2 = body["Top_brush2"]
    Fusion_rinse = body["Fusion_rinse"]
    Fusion_seal = body["Fusion_seal"]
    Rain_repel = body["Rain_repel"]
    Clear_coat_protectant = body["Clear_coat_protectant"]
    Tireshine = body["Tireshine"]
    Dryers = body["Dryers"]
    Mammoth_ear = body["Mammoth_ear"]
    
    ghostcar = Ghostcar(Conveyor_start=conveyor_starts, Undercarriage=undercarriage, Pre_soak=Pre_soak, windshield_spray=Back_windshield_spray)

    db.session.add(ghostcar)
    db.session.commit()

    return (jsonify(schedule.serialize())), 201


@api.route('/Ghostcar', methods=['GET'])
def get_ghostcar():
    ghostcar = Ghostcar.query.all()
    all_ghostcar = list(map(lambda ghostcar: ghostcar.serialize(), ghostcars))
    
    return jsonify(all_ghostcar), 200

@api.route("/ghostcar/active", methods=["POST"])
def active_ghostcar():
    print("Ghostcar")
    body=request.get_json()
    one_ghostcar = Ghostcar.query.filter_by(conveyor_start=body["conveyor_start"]).first()
    return jsonify(one_ghostcar.serialize()), 200

