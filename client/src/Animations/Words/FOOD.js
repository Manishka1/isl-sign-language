export const FOOD = (ref) => {

    let animations = []

    // LEFT HAND — Cone/gathered shape (like A's right hand)
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    // LEFT HAND — Wrist oriented toward mouth
    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/12, "-"]);

    // LEFT FOREARM — raising toward mouth/face
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/4, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/36, "+"]);

    // LEFT UPPER ARM — lifting up
    animations.push(["mixamorigLeftArm", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", Math.PI/72, "+"]);

    // RIGHT HAND — relaxed/neutral, resting
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/11, "-"]);

    ref.animations.push(animations);

    animations = []

    // LEFT HAND — reset cone fingers
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"]);

    // LEFT HAND — reset wrist
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);

    // LEFT FOREARM — reset
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);

    // LEFT UPPER ARM — reset
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", 0, "-"]);

    // RIGHT HAND — reset
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}