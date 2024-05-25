
from Classes import MainController
from Classes import ConfigManager

from fastapi import FastAPI
from pydantic import BaseModel


ConfigManager(r"dev.config")
app = FastAPI()
mc = MainController()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/show_all")
async def root():
    return mc.show_all()

@app.get("/get_user_password/{person_name}")
async def get_user_password(person_name: str):
    user = mc.get_user_password(person_name)  # Assuming you have this method implemented
    if user:
        return {"password": user}
    else:
        return {"password": "Not found"}

class User(BaseModel):
    person_name: str
    password: str

@app.post("/create_user/")
async def create_user(user: User):
    return mc.create_user(user.person_name, user.password)

class CreateActivity(BaseModel):
    person_id: int
    activity_name: str
    category_id_list: list
    location: str

@app.post("/create_activity/")
async def create_activity(create_activity: CreateActivity):
    return mc.create_activity(create_activity.person_id, create_activity.activity_name, create_activity.category_id_list, create_activity.location, lat=None, lon=None)

class JoinRemoveActivity(BaseModel):
    person_id: int
    activity_name: str

@app.post("/remove_activity/")
async def create_activity(remove_activity: JoinRemoveActivity):
    return mc.remove_activity(remove_activity.person_id, remove_activity.activity_name)

@app.post("/join_activity/")
async def join_activity(join_activity: JoinRemoveActivity):
    return mc.join_activity(join_activity.person_id, join_activity.activity_name)

@app.post("/create_category/")
async def create_category():
    return mc.create_category()

class Person_Category(BaseModel):
    person_id: int
    category_id: int

@app.post("/add_person_category/")
async def add_person_category(person_category: Person_Category):
    return mc.add_person_category(person_category.person_id, person_category.category_id)

@app.post("/remove_person_category/")
async def remove_person_category(person_category: Person_Category):
    return mc.remove_person_category(person_category.person_id, person_category.category_id)