import streamlit as st
import requests

# 🔥 REPLACE THIS WITH YOUR REAL RENDER BACKEND URL
API_URL = "https://your-backend.onrender.com"

st.set_page_config(
    page_title="🤟 ISL Translator",
    layout="wide",
    page_icon="🤟"
)

# ================= HEADER =================
st.markdown("""
# 🤟 AI Powered ISL Translator
Translate **English or Hindi** sentences into structured **Indian Sign Language (ISL)** grammar.
""")

st.markdown("---")

# ================= LAYOUT =================
col1, col2 = st.columns([2, 1])

# ================= INPUT COLUMN =================
with col1:
    st.subheader("📝 Enter Your Sentence")

    user_input = st.text_area(
        "",
        placeholder="Example: i will go tomorrow",
        height=150
    )

    translate_btn = st.button("🚀 Translate to ISL")

# ================= INFO COLUMN =================
with col2:
    st.info("""
### 🧠 How This Model Works

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

# ================= TRANSLATION =================
if translate_btn:

    if not user_input.strip():
        st.warning("⚠ Please enter a sentence.")
    else:
        try:
            response = requests.get(
                f"{API_URL}/translate",
                params={"text": user_input}
            )

            if response.status_code != 200:
                st.error("❌ Backend returned an error.")
                st.write(response.text)
            else:
                data = response.json()

                out1, out2, out3 = st.columns(3)

                with out1:
                    st.markdown("### 📌 Original Input")
                    st.success(data.get("original", ""))

                with out2:
                    st.markdown("### 🌍 English Translation")
                    st.success(data.get("english", ""))

                with out3:
                    st.markdown("### 🤟 ISL Structured Output")
                    isl_output = data.get("isl", "")
                    if isl_output:
                        st.success(isl_output)
                    else:
                        st.warning("No structured ISL output generated.")

                # Letter fallback
                unknown_words = data.get("unknown", [])
                if unknown_words:
                    st.markdown("---")
                    st.markdown("### 🔤 Letter-by-Letter Fallback")
                    st.write(" → ".join(unknown_words))

        except Exception as e:
            st.error("❌ Backend not reachable.")
            st.write(str(e))

# ================= MODEL EXPLANATION =================
st.markdown("---")
st.markdown("## 📊 Model Explanation")

st.markdown("""
The system extracts grammatical roles using NLP and restructures  
the sentence according to ISL grammar order.

Words not found in the animation dictionary are converted  
to alphabet animations.

The model is trained on 60+ predefined animation-supported words.
""")

st.markdown("### ✅ Supported Vocabulary (60+ Words)")

st.markdown("""
**Pronouns:**  
I, YOU, HE, SHE, WE  

**Family:**  
MOTHER, FATHER, BROTHER, SISTER, FRIEND  

**Places:**  
SCHOOL, COLLEGE, HOME, OFFICE, MARKET  

**Objects:**  
FOOD, WATER, BOOK, MONEY, PHONE  

**Actions:**  
GO, COME, EAT, DRINK, READ, WRITE, PLAY, WORK, STUDY, BUY  

**Time Words:**  
TODAY, TOMORROW, YESTERDAY, NOW, LATER  

**Expressions:**  
YES, NO, THANK, SORRY, PLEASE  

**Numbers:**  
ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN  

**Adjectives & Others:**  
HAPPY, SAD, BIG, SMALL, GOOD, BAD, LOVE, HELP, STOP, START, TIME, PERSON
""")
# ================= ANIMATION PREVIEW =================
st.markdown("---")
st.markdown("## 🎬 3D ISL Animation Preview")

st.markdown("""
Experience the structured output using a real-time 3D animated avatar.
""")

st.markdown("""
<div style="text-align:center;">
    <a href="https://isl-sign-languag-iw3z-gv6f956q6-manishka1s-projects.vercel.app/" target="_blank">
        <button style="font-size:20px;padding:12px 30px;background-color:#0E1117;color:white;border-radius:8px;">
            🤟 Open 3D ISL Animation App
        </button>
    </a>
</div>
""", unsafe_allow_html=True)

st.markdown("---")
st.caption("Built with FastAPI + spaCy NLP + React Three.js Animation")

