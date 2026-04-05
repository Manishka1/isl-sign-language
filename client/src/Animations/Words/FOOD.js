export const FOOD = (ref) => {

    let animations = []

    // RIGHT HAND — claw shape
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/3, "-"]);

    // RIGHT ARM — bring forward like YOU but less
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/8, "-"]);

    // RIGHT WRIST — palm facing inward/body
    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/8, "-"]);

    // RIGHT FOREARM — slight bend inward
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/10, "+"]);

    // LEFT HAND — mirror claw shape
    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/3, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/3, "+"]);

    // LEFT ARM — mirror of right
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/8, "-"]);

    // LEFT WRIST — mirror of right
    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/4, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/8, "+"]);

    // LEFT FOREARM — mirror
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/10, "+"]);

    ref.animations.push(animations);

    animations = []

    // RIGHT reset
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);

    // LEFT reset
    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
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

    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}