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

    def create_tables(self):
        query = '''
        CREATE TABLE IF NOT EXISTS characters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            character TEXT NOT NULL,
            age TEXT NOT NULL,
            area_of_work TEXT NOT NULL,
            area_of_interest TEXT NOT NULL
        )
        '''
        self.db.execute(query)
        self.db.commit()

    def create_character(self, username, character, age, area_of_work, area_of_interest):
        query = '''
        INSERT INTO characters (username, character, age, area_of_work, area_of_interest)
        VALUES (?, ?, ?, ?, ?)
        '''
        params = (username, character, age, area_of_work, area_of_interest)
        self.db.execute(query, params)
        self.db.commit()
        return {"message": "Character created successfully"}
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
    def get_user_by_email(self, email: str):
        query = f'SELECT * FROM "Person" WHERE email=%s'
        data = (email,)
        result = self.db.execute_select(query, data)
        return result[0] if result else None

    def create_user(self, person_name, email, password):
        query = f'INSERT INTO "Person" (person_name, email, password) VALUES (%s, %s, %s)'
        data = (person_name, email, password)
        return self.db.execute_change(query, data)

    def obtain_person_id(self, person_name, password):
        query = f'SELECT person_id FROM "Person" WHERE person_name=%s AND password=%s'
        data = (person_name, password)
        result = self.db.execute_select(query, data)
        return result[0] if result else None

    def obtain_person_category(self, person_name):
        query = f'SELECT category_id FROM "Person" WHERE person_name=%s'
        data = (person_name,)
        return self.db.execute_select(query, data)

    def showpassword(self, person_name):
        query = f'SELECT password FROM "Person" WHERE person_name=%s'
        data = (person_name,)
        result = self.db.execute_select(query, data)
        return result[0]['password'] if result else None

    def create_sprite(self, person_name, sprite):
        query = f'UPDATE "Person" SET sprite=%s WHERE person_name=%s'
        data = (sprite, person_name)
        return self.db.execute_change(query, data)

    def add_points(self, person_name, added_points: int):
        query = f'UPDATE "Person" SET points = points + %s WHERE person_name=%s'
        data = (added_points, person_name)
        return self.db.execute_change(query, data)

    # Post
    def create_post(self, person_name, post_title, post_body):
        query = f'INSERT INTO "Posts" (person_name, post_title, post_body) VALUES (%s, %s, %s)'
        data = (person_name, post_title, post_body)
        return self.db.execute_change(query, data)
    
    def add_to_party(self, inviter, recipient):
        query = f'SELECT MAX(party_id) FROM "Party"'
        curr_party_id = self.db.execute_select(query)[0][0]
        if not curr_party_id:
            party_id = 1
        else:
            party_id = curr_party_id + 1
        query = 'INSERT INTO "Party" (party_id, person_name) VALUES (%s, %s), (%s, %s)'
        # query = 'DELETE FROM "Party"'
        # query = 'SELECT * FROM "Party" WHERE person_name=%s'
        # data = ('"2121"',)
        data = (party_id, inviter, party_id, recipient)
        # print(self.db.execute_select(query, data))
        return self.db.execute_change(query, data)
    
    def get_person_name(self, email):
        query = 'SELECT person_name from "Person" WHERE email=%s'
        data = (email,)
        return self.db.execute_select(query, data)
    
    def update_person(self, person_name, age, sprite, work, interest):
        query = 'UPDATE "Person" SET age=%s, sprite=%s, work=%s, interest=%s WHERE person_name=%s'
        data = (age, sprite, work, interest, person_name)
        return self.db.execute_change(query, data)
    
    def obtain_info_for_activities(self, person_name):
        query = 'SELECT age, work, interest from "Person" WHERE person_name=%s'
        data = (person_name,)
        print(self.db.execute_select(query, data))
        return self.db.execute_select(query, data)