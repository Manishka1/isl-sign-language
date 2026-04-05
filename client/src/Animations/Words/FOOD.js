export const FOOD = (ref) => {

    let animations = []

    // RIGHT HAND — fingers pinched
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    // RIGHT ARM
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", -Math.PI/6, "-"]);

    // RIGHT FOREARM — up toward mouth
    animations.push(["mixamorigRightForeArm", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/9, "-"]);

    ref.animations.push(animations);

    // ARRAY 2 — tap toward mouth
    animations = []
    animations.push(["mixamorigRightForeArm", "rotation", "y", -Math.PI/2.2, "-"]);
    ref.animations.push(animations);

    // ARRAY 3 — FULL reset everything back to exactly 0
    animations = []

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

    // thumb was negative → reset with "+"
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    // arm was negative → reset with "+"
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "+"]);

    // forearm Y was negative (went to -PI/2.2 in array2) → reset with "+"
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "+"]);
    // forearm Z was negative → reset with "+"
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}