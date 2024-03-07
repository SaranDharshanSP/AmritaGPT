from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

url = ""

@app.route("/getResponse", methods = ["GET"])
def generate_text():
    return jsonify(
        {
        "hello" : "world"
        }
    )

if __name__ == "__main__":
    app.run(debug=True, port=8080)