from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import spacy
from langdetect import detect
from googletrans import Translator

# -----------------------------------
# Initialize FastAPI
# -----------------------------------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------
# Load ML Models
# -----------------------------------
nlp = spacy.load("en_core_web_sm")
translator = Translator()

# -----------------------------------
# Controlled 60 Word Vocabulary
# -----------------------------------
KNOWN_WORDS = {
    "I","YOU","HE","SHE","WE",
    "MOTHER","FATHER","BROTHER","SISTER","FRIEND",
    "SCHOOL","COLLEGE","HOME","OFFICE","MARKET",
    "FOOD","WATER","BOOK","MONEY","PHONE",
    "GO","COME","EAT","DRINK","READ","WRITE",
    "PLAY","WORK","STUDY","BUY",
    "TODAY","TOMORROW","YESTERDAY","NOW","LATER",
    "YES","NO","THANK","SORRY","PLEASE",
    "ZERO","ONE","TWO","THREE","FOUR",
    "FIVE","SIX","SEVEN","EIGHT","NINE","TEN",
    "HAPPY","SAD","BIG","SMALL","GOOD",
    "BAD","LOVE","HELP","STOP","START","TIME","PERSON"
}

NUMBER_MAP = {
    "0":"ZERO","1":"ONE","2":"TWO","3":"THREE","4":"FOUR",
    "5":"FIVE","6":"SIX","7":"SEVEN","8":"EIGHT","9":"NINE","10":"TEN"
}

TIME_WORDS = {"today","tomorrow","yesterday","now","later"}

# -----------------------------------
# English → ISL Grammar Engine (ML via spaCy)
# -----------------------------------
def english_to_isl(sentence):
    doc = nlp(sentence.lower())

    time = []
    subject = []
    obj = []
    verb = []
    numbers = []
    adjectives = []
    unknown = []

    for token in doc:

        # Numbers
        if token.text.isdigit():
            if token.text in NUMBER_MAP:
                numbers.append(NUMBER_MAP[token.text])
            continue

        # Time words
        if token.text in TIME_WORDS:
            time.append(token.text.upper())
            continue

        # Subject detection
        if token.dep_ in ["nsubj", "nsubjpass"]:
            subject.append(token.text.upper())
            continue

        # Object detection
        if token.dep_ in ["dobj", "pobj", "attr"]:
            obj.append(token.text.upper())
            continue

        # Main verb (ignore auxiliary)
        if token.pos_ == "VERB" and token.dep_ != "aux":
            lemma = token.lemma_.upper()
            verb.append(lemma)
            continue

        # Adjectives
        if token.pos_ == "ADJ":
            adjectives.append(token.text.upper())
            continue

    ordered = time + subject + adjectives + obj + numbers + verb

    filtered = []
    for w in ordered:
        if w in KNOWN_WORDS:
            filtered.append(w)
        else:
            unknown.append(w)

    return {
        "isl": " ".join(filtered),
        "unknown": unknown
    }

# -----------------------------------
# API Endpoint
# -----------------------------------
@app.get("/translate")
def translate(text: str):

    original_text = text

    # Detect language
    try:
        lang = detect(text)
    except:
        lang = "en"

    english_text = text

    # If Hindi → translate to English
    if lang == "hi":
        english_text = translator.translate(text, src="hi", dest="en").text

    result = english_to_isl(english_text)

    return {
        "original": original_text,
        "english": english_text,
        "isl": result["isl"],
        "unknown": result["unknown"]
    }
