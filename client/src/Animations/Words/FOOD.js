export const FOOD = (ref) => {

    let animations = []

    // POSE — from bone tester
    animations.push(["mixamorigRightArm", "rotation", "x", 0.1784, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 1.1484, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0.0184, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -2.2016, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", -0.5416, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 1.3684, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0.4284, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -0.0416, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 1.0084, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "y", 0.0984, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.4584, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", -0.4816, "-"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "y", -0.2116, "-"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0.4284, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "y", 0.2884, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0.3484, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "y", 0.3484, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0.5084, "+"]);

    ref.animations.push(animations);

    // RESET — every bone back to 0, direction flipped
    animations = []

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}