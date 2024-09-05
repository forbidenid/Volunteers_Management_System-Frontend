from models import storage
from api.views import app_views
from flask import Flask, jasonify, make_response
from os import dotenv
from flask_cors import CORS
from flasgger import swagger

app = Flask(__name__)

app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.register_blueprint(app_views)
cors = CORS(app, resources={r"/api/*": {"origins": "0.0.0.0"}})

@app.teardown_appcontext
def close_db(obj):
    storage.close()


@app.errorhandler(404)
def page_not_found(error):
    return make_response(jasonify({"error": "Not found"}), 404)