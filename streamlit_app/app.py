import streamlit as st
import requests

# 🔥 Replace with your actual Render backend URL
API_URL = "https://isl-sign-language.onrender.com/"

st.set_page_config(page_title="ISL Translator", page_icon="🤟")

st.title("🤟 ISL Translator")
st.write("Translate English or Hindi sentences into ISL structure.")

user_input = st.text_area("Enter text:")

if st.button("Translate"):

    if not user_input.strip():
        st.warning("Please enter text.")
    else:
        try:
            response = requests.get(
                f"{API_URL}/translate",
                params={"text": user_input}
            )

            data = response.json()

            st.subheader("Original")
            st.write(data["original"])

            st.subheader("English")
            st.write(data["english"])

            st.subheader("ISL Output")
            st.success(data["isl"])

            if data["unknown"]:
                st.subheader("Letter Fallback")
                st.write(", ".join(data["unknown"]))

        except Exception as e:
            st.error("Backend not reachable.")
            st.write(str(e))
