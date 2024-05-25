from .QueryManager import QueryManager

class MainController:
    def __init__(self):
        self.qm = QueryManager()

    def show_all(self):
        return self.qm.show_all()

    def select_user(self, telename):
        return self.qm.select_user(telename)

    def insert_user(self, person_name, password):
        if self.qm.select_user():  # Check if user alr exists
            return {"message": "User Creation Failed: User already Exists"}
        self.qm.insert_user()
        return {"message": "User Successfully Created"}
    
    def create_activity(self, person_id, activity_name, category_id_list=None, location=None, lat=None, lon=None):
        return self.qm.create_activity(person_id, activity_name, category_id_list, location, lat, lon)
    
    def remove_activity(self, person_id, activity_name):
        return self.qm.remove_activity(person_id, activity_name)
    
    def join_activity(self, person_id, activity_name):
        return self.qm.join_activity(person_id, activity_name)
    
    def leave_activity(self, person_id, activity_name):
        return self.qm.leave_activity(person_id, activity_name)
    
    def create_category(self):
        return self.qm.create_category()

    def create_user(self, person_name, password):
        return self.qm.create_user(person_name, password)

    def get_user_password(self, person_name):
        return self.qm.showpassword(person_name)
    
    def add_person_category(self, person_id, category_id):
        return self.qm.add_person_category(person_id, category_id)

    def remove_person_category(self, person_id, category_id):
        return self.qm.remove_person_category(person_id, category_id)