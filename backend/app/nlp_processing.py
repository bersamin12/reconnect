import spacy

nlp = spacy.load("en_core_web_sm")

def extract_skills_and_interests(text):
    doc = nlp(text)
    skills_interests = [ent.text for ent in doc.ents if ent.label_ in ['SKILL', 'INTEREST']]
    return skills_interests

# Example usage
user_profile = "I am skilled in Python programming and interested in data science."
skills_interests = extract_skills_and_interests(user_profile)
print(skills_interests)
