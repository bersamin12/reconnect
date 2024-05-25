from Classes import MainController
from Classes import ConfigManager

from fastapi import FastAPI
from pydantic import BaseModel

from flask import Flask, request, render_template_string
import requests

ConfigManager(r"dev.config")
app = Flask(__name__)
mc = MainController()
FASTAPI_BASE_URL = 'http://localhost:8000'

# HTML template for the form
form_template = """
<!doctype html>
<title>Get User Password</title>
<h1>Enter User Name</h1>


<body>
    <h1>Create User</h1>
    <form action="/create_user" method="post">
        <label for="person_name">Name:</label>
        <input type="text" id="person_name" name="person_name" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Submit</button>
    </form>
    {% if person_id %}
        <h2>Person ID: {{ person_id }}</h2>
    {% endif %}
</body>
{% if password %}
    <h2>Password for {{ name }}: {{ password }}</h2>
{% endif %}
"""

@app.route('/')
def index():
    return render_template_string(form_template)

@app.route('/get_password', methods=['POST'])
def get_password():
    user_name = request.form['name']
    
    # Assuming there is an endpoint in FastAPI to get user details by name
    # If you need a new endpoint in FastAPI to get password by name, you should add that.
    
    # Example endpoint to get password (you might need to implement this in your FastAPI)
    response = requests.get(f"http://127.0.0.1:8000/get_user_password/{user_name}")
    
    if response.status_code == 200:
        password = response.json().get('password', 'Not found')
    else:
        password = 'Not found'

    return render_template_string(form_template, password=password, name=user_name)

class User(BaseModel):
    person_name: str
    password: str

@app.route('/create_user', methods=['GET', 'POST'])
def create_user():
    person_id = None
    if request.method == 'POST':
        person_name = request.form['person_name']
        password = request.form['password']
        response = requests.post(f'{FASTAPI_BASE_URL}/create_user/', json={
            'person_name': person_name,
            'email': eamil,
            'password': password
        })
    #     if response.status_code == 200:
    #         data = response.json()
    #         person_id = data.get('person_id', 'Error fetching person_id')
    #     else:
    #         person_id = 'Error fetching person_id'
    return render_template_string(form_template)


if __name__ == '__main__':
    app.run(debug=True)
