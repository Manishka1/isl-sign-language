export const DRINK = (ref) => {

    let animations = []

    // POSE
    animations.push(["mixamorigRightArm", "rotation", "x", 0.1784, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 1.1484, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0.0184, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -2.3616, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0.0384, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 1.3684, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 2.1984, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0.1484, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", -0.7916, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "x", -0.1816, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 1.3384, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 1.5884, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 1.3984, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0.0684, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0.0684, "+"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 1.3984, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 1.2084, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 1.7884, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "x", -0.2116, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 1.1184, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 2.1984, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0.8184, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "x", -0.2316, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0.9284, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 2.3084, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "x", -0.3716, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 1.0384, "+"]);

    ref.animations.push(animations);

    // RESET — only right arm/hand bones, no Hips or LeftArm
    animations = []

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}