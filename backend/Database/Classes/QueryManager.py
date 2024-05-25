from .Database import Database

class QueryManager:
    def __init__(self):
        self.db = Database()

    def show_all(self):
        query = 'select * from "Person"'
        record = self.db.execute_select(query)
        return record

    def select_user(self, telename):
        query = "SELECT * FROM users WHERE telename = %s"
        data = (telename,)
        record = self.db.execute_select(query, data)
        return record
    
    def select_all_users(self):
        query = "SELECT * FROM users"
        record = self.db.execute_select(query)
        return record

    # Activity

    def create_activity(self, person_id, activity_name, category_id_list, location=None, lat=None, lon=None):
        query = f"""SELECT owner_id FROM "Activity" WHERE owner_id='{person_id}' AND activity_name='{activity_name}'"""
        if not self.db.execute_select(query):
            query = """INSERT INTO "Activity" (owner_id, activity_name, location, lat, lon) VALUES (%s, %s, %s, %s, %s)"""
            data = (person_id, activity_name, location, lat, lon)
            self.db.execute_change(query, data)

            for category_id in category_id_list:
                query = f"""INSERT INTO "Activity-Category" (activity_name, category_id) VALUES ('{activity_name}', {category_id})"""
                self.db.execute_change(query)

            query = f"""INSERT INTO "Person-Activity" (person_id, activity_name, status) VALUES ('{person_id}', '{activity_name}', 'owner')"""
            self.db.execute_change(query)
        return

    def remove_activity(self, person_id, activity_name):
        query = f"""SELECT activity_name FROM "Activity" WHERE owner_id='{person_id}' AND activity_name='{activity_name}'"""
        if self.db.execute_select(query):
            query = f"""DELETE FROM "Activity-Category" WHERE activity_name='{activity_name}'"""
            self.db.execute_change(query)
            query = f"""DELETE FROM "Person-Activity" WHERE activity_name='{activity_name}'"""
            self.db.execute_change(query)
            query = f"""DELETE FROM "Activity" WHERE activity_name='{activity_name}'"""
            return self.db.execute_change(query)

    def join_activity(self, person_id, activity_name):
        query = f"""SELECT activity_name FROM "Person-Activity" WHERE person_id='{person_id}' AND activity_name='{activity_name}'"""
        if not self.db.execute_select(query):
            query = f"""INSERT INTO "Person-Activity" (person_id, activity_name, status) VALUES ('{person_id}', '{activity_name}', 'member')"""
            return self.db.execute_change(query)

    def leave_activity(self, person_id, activity_name):
        query = f"""DELETE FROM "Person-Activity" WHERE person_id={person_id} AND activity_name='{activity_name}'"""
        self.db.execute_change(query)
        self.remove_activity(person_id, activity_name)

    def find_activity(self, category_id_list):
        activity_list = []
        for category_id in category_id_list:
            query = f"""SELECT * FROM "Activity-Category" WHERE category_id={category_id}"""
            results = self.db.execute_select(query)
            activity_list.append(results[0])

        print(activity_list)
        return activity_list

    # Organisation

    def create_organisation(self, person_id, organisation_name):
        query = f"""SELECT owner_id FROM "Activity" WHERE owner_id='{person_id}' AND organisation_name='{organisation_name}'"""
        if not self.db.execute_select(query):
            query = f"""INSERT INTO "Activity" (owner_id, organisation_name) VALUES ('{person_id}', '{organisation_name}')"""
            self.db.execute_change(query)

            query = f"""INSERT INTO "Person-Organisation" (person_id, organisation_name, status) VALUES ('{person_id}', '{organisation_name}', 'owner')"""
            self.db.execute_change(query)
        return

    def remove_organisation(self, person_id, organisation_name):
        query = f"""SELECT activity_name FROM "Organisation" WHERE owner_id='{person_id}' AND organisation_name='{organisation_name}'"""
        if self.db.execute_select(query):
            query = f"""DELETE FROM "Person-Organisation" WHERE organisation_name='{organisation_name}'"""
            self.db.execute_change(query)
            query = f"""DELETE FROM "Organisation-Activity" WHERE organisation_name='{organisation_name}'"""
            self.db.execute_change(query)
            query = f"""DELETE FROM "Organisation" WHERE organisation_name='{organisation_name}'"""
            return self.db.execute_change(query)
        
    def join_organisation(self, person_id, organisation_name):
        query = f"""SELECT activity_name FROM "Person-Organisation" WHERE person_id='{person_id}' AND organisation_name='{organisation_name}'"""
        if not self.db.execute_select(query):
            query = f"""INSERT INTO "Person-Activity" (person_id, organisation_name, status) VALUES ('{person_id}', '{organisation_name}', 'member')"""
            return self.db.execute_change(query)
    
    def leave_organisation(self, person_id, organisation_name):
        query = f"""DELETE FROM "Person-Organisation" WHERE person_id={person_id} AND organisation_name='{organisation_name}'"""
        self.db.execute_change(query)
        self.remove_organisation(person_id, organisation_name)

    def find_organisation(self):
        activity_list = []
        query = 'SELECT * FROM "Organisation"'
        results = self.db.execute_select(query)
        activity_list.append(results[0])

        print(activity_list)
        return activity_list
    
    # Category

    def create_category(self):
        query = """INSERT INTO "Category" (category_name) VALUES
        (%s), (%s), (%s), (%s), (%s), (%s), (%s), (%s), (%s)"""
        data = ("education", "healthcare", "enviroment", "social services", "animals", "arts", "sports", "technology", "disaster relief")
        return self.db.execute_change(query, data)

    def add_person_category(self, person_id, category_id):
        query = f"""SELECT person_id FROM "Person-Category" WHERE person_id='{person_id}' AND category_id='{category_id}'"""
        data = (person_id, category_id)
        if not self.db.execute_select(query, data):
            query = f"""INSERT INTO "Person-Category" (person_id, category_id) VALUES ('{person_id}', '{category_id}')"""
            return self.db.execute_change(query)

    def remove_person_category(self, person_id, category_id):
        query = f"""DELETE FROM "Person-Category" WHERE person_id={person_id} AND category_id={category_id}"""
        return self.db.execute_change(query)

    # Person

    def create_user(self, person_name, email, password):
        query = f"""INSERT INTO "Person" (person_name, email, password) VALUES ('{person_name}', '{email}', '{password}')"""
        return self.db.execute_change(query)
    
    def obtain_person_id(self, person_name, password):
        query = f"""SELECT person_id FROM "Person" WHERE person_name='{person_name}' AND password='{password}'"""
        return self.db.execute_change(query)
    
    def obtain_person_category(self, person_name):
        query = f"""SELECT category_id FROM "Person" WHERE person_name='{person_name}'"""
        return self.db.execute_change(query)

    def showpassword(self, person_name):
        query = f"""SELECT password FROM "Person" WHERE person_name='{person_name}'"""
        return self.db.execute_select(query)
    
    def create_sprite(self, person_name, sprite):
        query = f"""UPDATE "Person" SET sprite='{sprite}' WHERE person_name='{person_name}'"""
        return self.db.execute_change(query)
    
    def add_points(self, person_name, added_points: int):
        query = f"""UPDATE "Person" SET points = point + {added_points} WHERE person_name='{person_name}'"""
        return self.db.execute_change(query)