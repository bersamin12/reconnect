from app import create_app

app = create_app()

if __name__ == "__main__":
    # Ensure the spaCy model is installed
    import spacy.cli
    try:
        nlp = spacy.load("en_core_web_sm")
    except OSError:
        spacy.cli.download("en_core_web_sm")
        nlp = spacy.load("en_core_web_sm")
    
    app.run(debug=True)
