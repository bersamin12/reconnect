from .QueryManager import QueryManager

class MainController:
    def __init__(self):
        self.qm = QueryManager()

    def show_all(self):
        return self.qm.show_all()

    def select_user(self, telename):
        return self.qm.select_user(telename)

    def get_user_by_email(self, email: str):
        return self.qm.get_user_by_email(email)

    def insert_user(self, person_name, password):
        if self.qm.select_user():  # Check if user already exists
            return {"message": "User Creation Failed: User already Exists"}
        self.qm.insert_user()
        return {"message": "User Successfully Created"}

    # Activity

    def create_activity(self, person_id, activity_name, category_id_list=None, location=None, lat=None, lon=None):
        return self.qm.create_activity(person_id, activity_name, category_id_list, location, lat, lon)

    def remove_activity(self, person_id, activity_name):
        return self.qm.remove_activity(person_id, activity_name)

    def join_activity(self, person_id, activity_name):
        return self.qm.join_activity(person_id, activity_name)

    def leave_activity(self, person_id, activity_name):
        return self.qm.leave_activity(person_id, activity_name)

    def find_activity(self, category_id_list):
        return self.qm.find_activity(category_id_list)

    # Organisation

    def create_organisation(self, person_id, organisation_name):
        return self.qm.create_organisation(person_id, organisation_name)

    def remove_organisation(self, person_id, organisation_name):
        return self.qm.remove_organisation(person_id, organisation_name)

    def join_organisation(self, person_id, organisation_name):
        return self.qm.join_organisation(person_id, organisation_name)

    def leave_organisation(self, person_id, organisation_name):
        return self.qm.leave_organisation(person_id, organisation_name)

    def find_organisation(self):
        return self.qm.find_organisation()

    # Category

    def create_category(self):
        return self.qm.create_category()

    def add_person_category(self, person_id, category_id):
        return self.qm.add_person_category(person_id, category_id)

    def remove_person_category(self, person_id, category_id):
        return self.qm.remove_person_category(person_id, category_id)

    # Person

    def create_user(self, person_name, email, password):
        return self.qm.create_user(person_name, email, password)

    def obtain_user_id(self, person_name, password):
        return self.qm.obtain_person_id(self, person_name, password)

    def obtain_person_category(self, person_name):
        return self.qm.obtain_person_category(self, person_name)

    def get_user_password(self, person_name):
        return self.qm.showpassword(person_name)

    def create_sprite(self, person_name):
        return self.qm.create_sprite(person_name)

    def add_points(self, person_name, added_points):
        return self.qm.add_points(person_name, added_points)
    
    def add_to_party(self, inviter, recipient):
        return self.qm.add_to_party(inviter, recipient)

    def get_person_name(self, email):
        return self.qm.get_person_name(email)