from flask import Flask
app = Flask(__name__)

@app.route("/time")
def hello():
    return {
        'name' : "Hello World"
    }


if __name__=="__main__":
    app.run(debug=True)