import '../App.css'
import React, { useState, useEffect, useRef } from "react";
import Slider from 'react-input-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import xbot from '../Models/xbot/xbot.glb';
import ybot from '../Models/ybot/ybot.glb';
import xbotPic from '../Models/xbot/xbot.png';
import ybotPic from '../Models/ybot/ybot.png';

import * as words from '../Animations/words';
import * as alphabets from '../Animations/alphabets';
import { defaultPose } from '../Animations/defaultPose';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Convert() {

  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [englishText, setEnglishText] = useState("");
  const [speechLang, setSpeechLang] = useState("en-US");

  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);

  const componentRef = useRef({});
  const ref = componentRef.current;

  const textFromInput = useRef(null);

  const { transcript, resetTranscript } = useSpeechRecognition();

  // ---------------- THREE SETUP ----------------
  useEffect(() => {

    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdddddd);

    const light = new THREE.SpotLight(0xffffff, 2);
    light.position.set(0, 5, 5);
    ref.scene.add(light);

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });

    ref.camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth * 0.57 / (window.innerHeight - 70),
      0.1,
      1000
    );

    ref.renderer.setSize(window.innerWidth * 0.57, window.innerHeight - 70);

    const canvasContainer = document.getElementById("canvas");
    canvasContainer.innerHTML = "";
    canvasContainer.appendChild(ref.renderer.domElement);

    ref.camera.position.z = 1.6;
    ref.camera.position.y = 1.4;

    const loader = new GLTFLoader();
    loader.load(bot, (gltf) => {

      gltf.scene.traverse((child) => {
        if (child.type === 'SkinnedMesh') {
          child.frustumCulled = false;
        }
      });

      ref.avatar = gltf.scene;
      ref.scene.add(ref.avatar);

      ref.animations = [];
      ref.characters = [];

      defaultPose(ref);
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bot]);

  // ---------------- ANIMATION LOOP ----------------
  ref.animate = () => {

    if (!ref.animations || ref.animations.length === 0) {
      ref.pending = false;
      return;
    }

    requestAnimationFrame(ref.animate);

    if (ref.animations[0].length) {

      if (!ref.flag) {

        if (ref.animations[0][0] === 'add-text') {
          setText(prev => prev + ref.animations[0][1]);
          ref.animations.shift();
        } else {

          for (let i = 0; i < ref.animations[0].length;) {

            let [boneName, action, axis, limit, sign] = ref.animations[0][i];
            let bone = ref.avatar.getObjectByName(boneName);

            if (!bone) {
              ref.animations[0].splice(i, 1);
              continue;
            }

            if (sign === "+" && bone[action][axis] < limit) {
              bone[action][axis] += speed;
              bone[action][axis] = Math.min(bone[action][axis], limit);
              i++;
            }
            else if (sign === "-" && bone[action][axis] > limit) {
              bone[action][axis] -= speed;
              bone[action][axis] = Math.max(bone[action][axis], limit);
              i++;
            }
            else {
              ref.animations[0].splice(i, 1);
            }
          }
        }
      }

    } else {
      ref.flag = true;
      setTimeout(() => { ref.flag = false }, pause);
      ref.animations.shift();
    }

    ref.renderer.render(ref.scene, ref.camera);
  };

  // ---------------- BACKEND CALL ----------------
  const translateToISL = async (inputText) => {
    try {
      const res = await fetch(
        `http://localhost:8000/translate?text=${encodeURIComponent(inputText)}`
      );
      return await res.json();
    } catch (err) {
      console.error(err);
      return {
        original: inputText,
        english: inputText,
        isl: "",
        unknown: []
      };
    }
  };

  // ---------------- MAIN SIGN FUNCTION ----------------
  const sign = async (inputText) => {

    if (!inputText) return;

    setText("");
    ref.animations = [];

    const result = await translateToISL(inputText);

    setOriginalText(result.original);
    setEnglishText(result.english);

    const knownWords = result.isl
      ? result.isl.split(" ").filter(w => w)
      : [];

    const unknownWords = result.unknown || [];

    for (let word of knownWords) {
      if (words[word]) {
        ref.animations.push(['add-text', word + ' ']);
        words[word](ref);
      }
    }

    for (let word of unknownWords) {
      for (let ch of word.split('')) {
        if (alphabets[ch]) {
          ref.animations.push(['add-text', ch]);
          alphabets[ch](ref);
        }
      }
      ref.animations.push(['add-text', ' ']);
    }

    if (!ref.pending) {
      ref.pending = true;
      ref.animate();
    }
  };

  // ---------------- SPEECH ----------------
  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: speechLang
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const clearAll = () => {
    stopListening();
    resetTranscript();
    setText("");
    setOriginalText("");
    setEnglishText("");
    ref.animations = [];
    ref.pending = false;
    ref.flag = false;
  };

  return (
    <div className='container-fluid'>
      <div className='row'>

        <div className='col-md-3'>

          <label>Original</label>
          <textarea rows={2} value={originalText} readOnly className='w-100' />

          <label>English</label>
          <textarea rows={2} value={englishText} readOnly className='w-100' />

          <label>ISL Output</label>
          <textarea rows={2} value={text} readOnly className='w-100' />

          <select
            className="form-select mb-2"
            value={speechLang}
            onChange={(e) => setSpeechLang(e.target.value)}
          >
            <option value="en-US">English</option>
            <option value="hi-IN">Hindi</option>
          </select>

          <button onClick={startListening} className="btn btn-primary w-100 mb-2">
            Mic On
          </button>

          <button onClick={stopListening} className="btn btn-secondary w-100 mb-2">
            Mic Off
          </button>

          <button onClick={clearAll} className="btn btn-warning w-100 mb-2">
            Clear
          </button>

          <textarea
            rows={3}
            value={transcript}
            readOnly
            className='w-100'
          />

          <button
            onClick={() => sign(transcript)}
            className='btn btn-success w-100 mb-2'
          >
            Animate Speech
          </button>

          <label>Text Input</label>
          <textarea
            rows={3}
            ref={textFromInput}
            className='w-100'
          />

          <button
            onClick={() => sign(textFromInput.current.value)}
            className='btn btn-success w-100'
          >
            Animate Text
          </button>

        </div>

        <div className='col-md-7'>
          <div id='canvas' />
        </div>

        <div className='col-md-2'>
          <p>Select Avatar</p>
          <img src={xbotPic} onClick={() => setBot(xbot)} width="100%" alt="xbot"/>
          <img src={ybotPic} onClick={() => setBot(ybot)} width="100%" alt="ybot"/>

          <p>Speed</p>
          <Slider
            axis="x"
            xmin={0.05}
            xmax={0.50}
            xstep={0.01}
            x={speed}
            onChange={({ x }) => setSpeed(x)}
          />

          <p>Pause</p>
          <Slider
            axis="x"
            xmin={0}
            xmax={2000}
            xstep={100}
            x={pause}
            onChange={({ x }) => setPause(x)}
          />
        </div>

      </div>
    </div>
  );
}

export default Convert;
