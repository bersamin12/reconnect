from fastapi import FastAPI
from pydantic import BaseModel
from urllib.error import HTTPError


from fastapi.middleware.cors import CORSMiddleware

from Classes import MainController, ConfigManager

ConfigManager(r"dev.config")
app = FastAPI()
mc = MainController()

origins = [
    "http://localhost:3000",  # Adjust this to your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/show_all")
async def root():
    return mc.show_all()

class CharacterCreationDetails(BaseModel):
    username: str
    character: str
    age: str
    area_of_work: str
    area_of_interest: str

@app.post("/create_character/")
async def create_character(details: CharacterCreationDetails):
    return mc.create_character(
        details.username, 
        details.character, 
        details.age, 
        details.area_of_work, 
        details.area_of_interest
    )

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

# Define UserLogin model
class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/login/")
async def login(user: UserLogin):
    user_data = mc.get_user_by_email(user.email)  # Assuming this method is implemented
    if user_data and user_data['password'] == user.password:
        return {"message": "Login successful"}
    else:
        return "Invalid email or password"
    
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

class Invite(BaseModel):
    inviter: str
    recipient: str

@app.post("/add_to_party/")
async def add_to_party(invite: Invite):
    return mc.add_to_party(invite.inviter, invite.recipient)

class Email(BaseModel):
    email: str

@app.post("/get_person_name/")
async def get_person_name(email: Email):
    print(mc.get_person_name(email.email))
    return mc.get_person_name(email.email)[0][0]

class Update(BaseModel):
    person_name: str
    age: int
    sprite: str
    work: str
    interest: str

@app.post("/update_person/")
async def update_person(update: Update):
    return mc.update_person(update.person_name, update.age, update.sprite, update.work, update.interest)

class Activities(BaseModel):
    age: int
    interest: str
    work: str

@app.post("/find_activities/")
async def find_activities(activities: Activities):
    return mc.find_activities(activities.age, activities.interest, activities.work)

@app.post("/obtain_info_for_activities/")
async def obtain_info_for_activities(username_only: UsernameOnly):
    return mc.obtain_info_for_activities(username_only.person_name)