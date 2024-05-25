from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def find_best_match(user_profile, opportunities):
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform([user_profile] + opportunities)
    cosine_similarities = cosine_similarity(vectors[0:1], vectors[1:]).flatten()
    best_match_idx = cosine_similarities.argmax()
    return opportunities[best_match_idx]

def recommend_opportunities(user_profile, user_preferences, user_history, opportunities):
    processed_profile = user_profile + ' ' + user_preferences + ' ' + user_history
    documents = [processed_profile] + opportunities
    tfidf_matrix = TfidfVectorizer().fit_transform(documents)
    cosine_similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()
    top_matches_indices = cosine_similarities.argsort()[-5:][::-1]
    top_matches = [opportunities[idx] for idx in top_matches_indices]
    return top_matches

user_profile = "I am skilled in Python programming and machine learning."
user_preferences = "I prefer data science projects and opportunities involving AI."
user_history = "I have previously volunteered in web development and data analysis."
opportunities = [
    "Join our team to develop a Python-based web application.",
    "Volunteer for a machine learning project to analyze social media data.",
    "Assist in a data science project involving AI and big data.",
    "Help with frontend development using JavaScript and React.",
    "Participate in our artificial intelligence research initiative."
]

top_recommendations = recommend_opportunities(user_profile, user_preferences, user_history, opportunities)
print("Top Recommendations:")
for i, recommendation in enumerate(top_recommendations, 1):
    print(f"{i}. {recommendation}")
