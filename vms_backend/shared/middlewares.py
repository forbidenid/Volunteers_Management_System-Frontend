import sys
import time
from datetime import datetime

from flask import g
from flask_jwt_extended import current_user

from vms_api.factory import db, app

start_time = 0


@app.before_request
def before_req():
    global start_time
    g.user = current_user
    start_time = time.perf_counter()  # High-resolution timer


@app.after_request
def after_req(response):
    end_time = time.perf_counter()  # High-resolution timer
    elapsed = (end_time - start_time) * 1000  # Convert to milliseconds
    sys.stdout.write('Request took %d milliseconds\n' % elapsed)
    return response
