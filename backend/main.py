from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import spacy
from langdetect import detect
from googletrans import Translator

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

nlp = spacy.load("en_core_web_sm")
translator = Translator()

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
# Letter-by-letter fallback
# -----------------------------------
def word_to_letters(word: str):
    """Converts unknown word to list of individual capital letters"""
    return [char.upper() for char in word if char.isalpha()]

# -----------------------------------
# Single word handler
# -----------------------------------
def handle_single_word(word: str):
    upper = word.upper()
    if upper in KNOWN_WORDS:
        return {
            "isl": upper,
            "unknown": [],
            "spelled": []
        }
    else:
        letters = word_to_letters(word)
        return {
            "isl": " ".join(letters),
            "unknown": [upper],
            "spelled": [upper]  # tells frontend these were spelled out
        }

# -----------------------------------
# English → ISL Grammar Engine
# -----------------------------------
def english_to_isl(sentence: str):
    doc = nlp(sentence.lower())

    time = []
    subject = []
    obj = []
    verb = []
    numbers = []
    adjectives = []
    unknown = []
    spelled = []

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

        # Subject
        if token.dep_ in ["nsubj", "nsubjpass"]:
            upper = token.text.upper()
            if upper in KNOWN_WORDS:
                subject.append(upper)
            else:
                unknown.append(upper)
                spelled.append(upper)
                subject.extend(word_to_letters(token.text))
            continue

        # Object
        if token.dep_ in ["dobj", "pobj", "attr"]:
            upper = token.text.upper()
            if upper in KNOWN_WORDS:
                obj.append(upper)
            else:
                unknown.append(upper)
                spelled.append(upper)
                obj.extend(word_to_letters(token.text))
            continue

        # Main verb
        if token.pos_ == "VERB" and token.dep_ != "aux":
            lemma = token.lemma_.upper()
            if lemma in KNOWN_WORDS:
                verb.append(lemma)
            else:
                unknown.append(lemma)
                spelled.append(lemma)
                verb.extend(word_to_letters(token.lemma_))
            continue

        # Adjectives
        if token.pos_ == "ADJ":
            upper = token.text.upper()
            if upper in KNOWN_WORDS:
                adjectives.append(upper)
            else:
                unknown.append(upper)
                spelled.append(upper)
                adjectives.extend(word_to_letters(token.text))
            continue

    ordered = time + subject + adjectives + obj + numbers + verb

    # --- FIX: if nothing was parsed at all (e.g. loose nouns/words) ---
    # fallback: try every token directly
    if not ordered:
        for token in doc:
            if token.is_stop or token.is_punct:
                continue
            upper = token.text.upper()
            if upper in KNOWN_WORDS:
                ordered.append(upper)
            else:
                unknown.append(upper)
                spelled.append(upper)
                ordered.extend(word_to_letters(token.text))

    return {
        "isl": " ".join(ordered),
        "unknown": unknown,
        "spelled": spelled
    }

# -----------------------------------
# API Endpoint
# -----------------------------------
@app.get("/translate")
def translate(text: str):

    original_text = text.strip()

    # Detect language
    try:
        lang = detect(original_text)
    except:
        lang = "en"

    english_text = original_text

    # Hindi → English
    if lang == "hi":
        english_text = translator.translate(original_text, src="hi", dest="en").text

    # --- FIX: Single word shortcut ---
    words = english_text.strip().split()
    if len(words) == 1:
        result = handle_single_word(words[0])
    else:
        result = english_to_isl(english_text)

    return {
        "original": original_text,
        "english": english_text,
        "isl": result["isl"],
        "unknown": result["unknown"],
        "spelled": result.get("spelled", [])  # new field — tells frontend what was spelled
    }