import csv
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def read_opportunities_from_csv(csv_file):
    opportunities = []
    with open(csv_file, 'r', newline='', encoding='utf-8') as file:
        reader = csv.reader(file)
        for row in reader:
            opportunities.append(row[0])  # Assuming the opportunities are in the first column
    return opportunities

def recommend_opportunities(user_profile, user_preferences, user_history, opportunities):
    processed_profile = user_profile + ' ' + user_preferences + ' ' + user_history
    documents = [processed_profile] + opportunities
    tfidf_matrix = TfidfVectorizer().fit_transform(documents)
    cosine_similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()
    top_matches_indices = cosine_similarities.argsort()[-5:][::-1]
    top_matches = [opportunities[idx] for idx in top_matches_indices]
    return top_matches

def csv_lines_to_list(csv_file):
    lines = []
    with open(csv_file, 'r', newline='', encoding='utf-8') as file:
        reader = csv.reader(file)
        for row in reader:
            lines.append(row)
    return lines

user_profile = "I am skilled in Python programming and machine learning."
user_preferences = "I prefer data science projects and opportunities involving AI."
user_history = "I have previously volunteered in web development and data analysis."
opportunities_file = r"volunteer_opportunities.csv"  # Update this with your CSV file path

opportunities = read_opportunities_from_csv(opportunities_file)

top_recommendations = csv_lines_to_list(opportunities_file)[:6]
print("Top 5 Recommendations:")
for i, recommendation in enumerate(top_recommendations, 1):
    print(f"{i}. {recommendation}")
    index = [4,6,8]
    print(f"{i}. {[x for x in recommendation if recommendation.index(x) in index]}")
