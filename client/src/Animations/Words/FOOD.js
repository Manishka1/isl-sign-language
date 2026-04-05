export const FOOD = (ref) => {

    let animations = []

    // RIGHT HAND — fingers bend FORWARD to meet at tips (x axis not z)
    animations.push(["mixamorigRightHandIndex1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "x", Math.PI/3, "+"]);

    // THUMB — comes forward to meet fingers
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/4, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "x", -Math.PI/4, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "x", -Math.PI/4, "-"]);

    // RIGHT UPPER ARM — bring forward and slightly inward toward mouth
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", -Math.PI/10, "-"]);

    // RIGHT FOREARM — bend elbow up toward mouth level
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);

    // RIGHT WRIST — palm faces body, fingers point toward mouth
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/4, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);

    ref.animations.push(animations);

    // ARRAY 2 — tap toward mouth
    animations = []
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/5, "-"]);

    ref.animations.push(animations);

    // ARRAY 3 — full reset
    animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}