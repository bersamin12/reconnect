import spacy
from spacy.matcher import Matcher

# Load the SpaCy model
nlp = spacy.load("en_core_web_sm")

# Initialize the Matcher
matcher = Matcher(nlp.vocab)

# Define patterns for skills and interests
patterns = [
    {"label": "SKILL", "pattern": [{"LOWER": "python"}, {"LOWER": "programming"}]},
    {"label": "INTEREST", "pattern": [{"LOWER": "data"}, {"LOWER": "science"}]}
    # Add more patterns as needed
]

# Add patterns to the matcher
for pattern in patterns:
    matcher.add(pattern["label"], [pattern["pattern"]])

def extract_skills_and_interests(text):
    doc = nlp(text)
    matches = matcher(doc)
    skills_interests = [doc[start:end].text for match_id, start, end in matches]
    return skills_interests

# Example usage
user_profile = "I am skilled in Python programming and interested in data science."
skills_interests = extract_skills_and_interests(user_profile)
print(skills_interests)
