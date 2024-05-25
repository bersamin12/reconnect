
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

# Activity
class CreateActivity(BaseModel):
    person_id: int
    activity_name: str
    category_id_list: list
    location: str

@app.post("/create_activity/")
async def create_activity(create_activity: CreateActivity):
    return mc.create_activity(create_activity.person_id, create_activity.activity_name, create_activity.category_id_list, create_activity.location, lat=None, lon=None)

class JoinLeaveRemoveActivity(BaseModel):
    person_id: int
    activity_name: str

@app.post("/remove_activity/")
async def remove_activity(remove_activity: JoinLeaveRemoveActivity):
    return mc.remove_activity(remove_activity.person_id, remove_activity.activity_name)

@app.post("/join_activity/")
async def join_activity(join_activity: JoinLeaveRemoveActivity):
    return mc.join_activity(join_activity.person_id, join_activity.activity_name)

@app.post("/leave_activity/")
async def leave_activity(leave_activity: JoinLeaveRemoveActivity):
    return mc.leave_activity(leave_activity.person_id, leave_activity.activity_name)

class FindActivity(BaseModel):
    category_id_list: list

@app.post("/find_activity/")
async def find_activity(find_activity: FindActivity):
    return mc.find_activity(find_activity.category_id_list)

# Organisation
class Organisation(BaseModel):
    person_id: int
    organisation_name: str

@app.post("/create_organisation/")
async def create_organisation(organisation: Organisation):
    return mc.create_organisation(organisation.person_id, organisation.organisation_name)

@app.post("/remove_organisation/")
async def remove_organisation(organisation: Organisation):
    return mc.remove_organisation(organisation.person_id, organisation.organisation_name)

@app.post("/join_organisation/")
async def join_organisation(organisation: Organisation):
    return mc.join_organisation(organisation.person_id, organisation.organisation_name)

@app.post("/leave_organisation/")
async def leave_organisation(organisation: Organisation):
    return mc.leave_organisation(organisation.person_id, organisation.organisation_name)

@app.post("/find_organisation/")
async def find_organisation():
    return mc.find_organisation()

# Category

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

# Person
class User(BaseModel):
    person_name: str
    email: str
    password: str

@app.post("/create_user/")
async def create_user(user: User):
    return mc.create_user(user.person_name, user.email, user.password)

@app.post("/obtain_user_id/")
async def obtain_user_id(user: User):
    return mc.obtain_user_id(user.person_name, user.password)

class UsernameOnly(BaseModel):
    person_name: str

@app.post("/obtain_person_category/")
async def obtain_person_category(username_only: UsernameOnly):
    return mc.obtain_person_category(username_only.person_name)

@app.get("/get_user_password/{person_name}")
async def get_user_password(person_name: str):
    user = mc.get_user_password(person_name)  # Assuming you have this method implemented
    if user:
        return {"password": user}
    else:
        return {"password": "Not found"}

# @app.post("/get_user_password/")
# async def get_user_password(username_only: UsernameOnly):
#     return mc.get_user_password(username_only.person_name)

@app.post("/create_sprite/")
async def create_sprite(username_only: UsernameOnly):
    return mc.create_sprite(username_only.person_name)

class UserPoints(BaseModel):
    person_name: str
    added_points: int

@app.post("/add_points/")
async def add_points(user_points: UserPoints):
    return mc.add_points(user_points.person_name, user_points.added_points)
