from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')  # splash screen

@app.route('/home')
def home():
    return render_template('home.html')  # main single-page with sections

if __name__ == '__main__':
    app.run(debug=True)
