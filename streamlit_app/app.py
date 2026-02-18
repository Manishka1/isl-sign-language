import streamlit as st
import requests

# Replace with your Render backend URL
API_URL = "https://isl-sign-language.onrender.com"

st.set_page_config(
    page_title="ISL Translator",
    layout="wide",
    page_icon="🤟"
)

# ================= HEADER =================
st.markdown("""
# AI Powered ISL Translator
Translate **English or Hindi** sentences into structured **Indian Sign Language (ISL)** grammar.
""")

st.markdown("---")

# ================= LAYOUT =================
col1, col2 = st.columns([2, 1])

# ================= INPUT COLUMN =================
with col1:

    st.subheader("Enter Your Sentence:")

    user_input = st.text_area(
        "",
        placeholder="Example: My name is Manishka",
        height=150
    )

    translate_btn = st.button("🚀 Translate to ISL")

# ================= INFO COLUMN =================
with col2:
    st.info("""
### How This Model Works

1. Detects input language (Hindi/English)
2. Converts Hindi → English (if needed)
3. Uses NLP (spaCy) to detect:
   - Subject
   - Object
   - Verb
   - Time words
4. Reorders words into ISL grammar:
   
   **TIME → SUBJECT → ADJECTIVE → OBJECT → NUMBER → VERB**
5. Unknown words → Letter-by-letter fallback
""")

st.markdown("---")

# ================= OUTPUT SECTION =================
if translate_btn:

    if not user_input.strip():
        st.warning("⚠ Please enter a sentence.")
    else:
        try:
            response = requests.get(
                f"{API_URL}/translate",
                params={"text": user_input}
            )

            data = response.json()

            out1, out2, out3 = st.columns(3)

            with out1:
                st.markdown("### 📌 Original Input")
                st.success(data["original"])

            with out2:
                st.markdown("### 🌍 English Translation")
                st.success(data["english"])

            with out3:
                st.markdown("### 🤟 ISL Structured Output")
                if data["isl"]:
                    st.success(data["isl"])
                else:
                    st.warning("No structured output generated.")

            # Fallback
            if data["unknown"]:
                st.markdown("---")
                st.markdown("### 🔤 Letter-by-Letter Fallback")
                st.write(" → ".join(data["unknown"]))

            st.markdown("---")

# 🔥 MODEL EXPLANATION (MOVE OUTSIDE)
st.markdown("---")
st.markdown("### 📊 Model Explanation")
st.write("""
The system extracts grammatical roles using NLP and restructures
the sentence according to ISL grammar order.

Words not found in the animation dictionary are converted
to alphabet animations.

The model is trained on 60+ predefined animation-supported words:

I, YOU, HE, SHE, WE,  
MOTHER, FATHER, BROTHER, SISTER, FRIEND,  
SCHOOL, COLLEGE, HOME, OFFICE, MARKET,  
FOOD, WATER, BOOK, MONEY, PHONE,  
GO, COME, EAT, DRINK, READ, WRITE,  
PLAY, WORK, STUDY, BUY,  
TODAY, TOMORROW, YESTERDAY, NOW, LATER,  
YES, NO, THANK, SORRY, PLEASE,  
ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN,  
HAPPY, SAD, BIG, SMALL, GOOD, BAD, LOVE, HELP, STOP, START, TIME, PERSON
""")


        except Exception as e:
            st.error("❌ Backend not reachable.")
            st.write(str(e))

# ================= ANIMATION PREVIEW =================
st.markdown("---")

st.markdown("## 🎬 3D ISL Animation Preview")

st.markdown("""
See how the structured output works with a 3D animated avatar.
""")

st.markdown("""
<div style="text-align:center;">
    <a href="https://isl-sign-languag-iw3z-gv6f956q6-manishka1s-projects.vercel.app/" target="_blank">
        <button style="font-size:20px;padding:12px 30px;background-color:#0E1117;color:white;border-radius:8px;">
            Open 3D ISL Animation App
        </button>
    </a>
</div>
""", unsafe_allow_html=True)

st.markdown("---")

st.caption("Built with FastAPI + spaCy NLP + React Three.js Animation")
