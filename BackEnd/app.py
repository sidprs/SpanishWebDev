from flask import Flask, render_template, request, jsonify


#app = Flask(__name__, template_folder='path/to/templates')
# /home/sid/web/SpanishWebDev/FrontEnd is my app for example


app = Flask(__name__, template_folder='/home/sid/web/SpanishWebDev/FrontEnd/')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/update_profile', methods=['POST'])
def update_profile():
    name = request.form['name']
    grade = request.form['grade']
    class_name = request.form['class']
    teacher = request.form['teacher']
    
    # Process the data (e.g., store it in a database)
    # You can perform any backend logic here

    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)

