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