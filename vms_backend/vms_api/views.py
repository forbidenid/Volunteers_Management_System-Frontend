import os

from flask import jsonify, send_from_directory

from vms_api.factory import app


@app.route("/routes")
def site_map():
    links = []
    for rule in app.url_map._rules:
        links.append({'ulr': rule.rule, 'view': rule.endpoint})
    return jsonify(links), 200


# @app.route('/vms_api/images/<path:path>')
def send_js(path):
    basedir = os.path.join(os.path.realpath(os.getcwd()), 'static', 'img.png')
    if os.path.exists(basedir):
        return app.send_static_file(basedir)
    return send_from_directory('images', path)