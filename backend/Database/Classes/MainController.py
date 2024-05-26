from .QueryManager import QueryManager
import csv
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

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

    def create_character(self, username, character, age, area_of_work, area_of_interest):
        return self.qm.create_character(username, character, age, area_of_work, area_of_interest)


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
    
    def update_person(self, person_name, age, sprite, work, interest):
        return self.qm.update_person(person_name, age, sprite, work, interest)
    
    # # Import necessary libraries
    # import os
    # import zipfile
    # import pandas as pd
    # import opendatasets as od

    # # Set your Kaggle API credentials
    # os.environ['KAGGLE_USERNAME'] = "ganqingrong"
    # os.environ['KAGGLE_KEY'] = "0262b4acfdefab19264ecbaa7d5950c2"

    # # Assign the Kaggle data set URL into variable
    # dataset = 'https://www.kaggle.com/ryanholbrook/dl-course-data'# Using opendatasets let's download the data sets
    # od.download(dataset)
    # # Unzip the downloaded dataset
    # with zipfile.ZipFile('dataset_name.zip', 'r') as zip_ref:
    #     zip_ref.extractall('dataset')

    # # Load the dataset into a pandas DataFrame
    # df = pd.read_csv('dataset/dataset_file.csv')

    # # Now you can work with the DataFrame
    # print(df.head())
    
    def recommend_opportunities(self, user_profile, user_preferences, user_history, opportunities):
        processed_profile = user_profile + ' ' + user_preferences + ' ' + user_history
        documents = [processed_profile] + opportunities
        tfidf_matrix = TfidfVectorizer().fit_transform(documents)
        cosine_similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()
        top_matches_indices = cosine_similarities.argsort()[-5:][::-1]
        top_matches = [opportunities[idx] for idx in top_matches_indices]
        return top_matches

    def csv_to_list_of_strings(self, csv_filename):
        with open(csv_filename, newline='', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            list_of_strings = []
            for row in reader:
                row_string = ','.join(row)
                list_of_strings.append(row_string)
        return list_of_strings

    def find_activities(self, age, interest, work):
        user_profile = f"I am {age} years old."
        user_preferences = f"I prefer data projects involving involving {interest}."
        user_history = f"I have previously worked in {work}."
        opportunities_file = r"C:\Save Data Here\Coding stuff\Projects\reconnect\backend\Database\Classes\volunteer_opportunities.csv"

        opportunities = self.csv_to_list_of_strings(opportunities_file)
        # print(opportunities)

        top_recommendations = self.recommend_opportunities(user_profile, user_preferences, user_history, opportunities)
        print("Top Recommendations:")
        recommendation_list = []
        for i, recommendation in enumerate(top_recommendations, 1):
            list1 = recommendation.split(",")
            list2 = [list1[4], list1[6]]
            recommendation_list.append(list2)
        print(recommendation_list)
        return(recommendation_list)
    
    def obtain_info_for_activities(self, person_name):
        return self.qm.obtain_info_for_activities(person_name)
