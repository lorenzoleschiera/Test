function animation(character) {
    var frameRate = 1;

    var moveRightLeg = new BABYLON.Animation("moveRightLeg", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var axis = new BABYLON.Vector3(1, 0, 0);

    var moveRightLeg_keys = [];

    moveRightLeg_keys.push({
        frame: 0,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.90).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.20).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });
    moveRightLeg_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.90).toEulerAngles()
    });

    var moveLeftLeg = new BABYLON.Animation("moveLeftLeg", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var moveLeftLeg_keys = [];
    moveLeftLeg_keys.push({
        frame: 0 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.20).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.90).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });


    var moveRightLegDown_keys = [];

    moveRightLegDown_keys.push({
        frame: 0,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.70).toEulerAngles()
    });

    moveRightLegDown_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.60).toEulerAngles()
    });

    moveRightLegDown_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    moveRightLegDown_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveRightLegDown_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    moveRightLegDown_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.60).toEulerAngles()
    });

    moveRightLegDown_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.70).toEulerAngles()
    });

    moveRightLegDown_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -1.00).toEulerAngles()
    });
    moveRightLegDown_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.70).toEulerAngles()
    });
    var moveRightLegDown = new BABYLON.Animation("moveRightLegDown", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);


    var moveLeftLegDown_keys = [];
    moveLeftLegDown_keys.push({
        frame: 0 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveLeftLegDown_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    moveLeftLegDown_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.60).toEulerAngles()
    });

    moveLeftLegDown_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.70).toEulerAngles()
    });

    moveLeftLegDown_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -1.00).toEulerAngles()
    });

    moveLeftLegDown_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.70).toEulerAngles()
    });

    moveLeftLegDown_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.60).toEulerAngles()
    });

    moveLeftLegDown_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });
    moveLeftLegDown_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    var moveLeftLegDown = new BABYLON.Animation("moveLeftLegDown", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var moveLeftArm_keys = [];

    moveLeftArm_keys.push({
        frame: 0,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.90).toEulerAngles()
    });

    moveLeftArm_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveLeftArm_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveLeftArm_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveLeftArm_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    moveLeftArm_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.20).toEulerAngles()
    });

    moveLeftArm_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveLeftArm_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });
    moveLeftArm_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.90).toEulerAngles()
    });

    var moveRightArm_keys = [];
    moveRightArm_keys.push({
        frame: 0 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.20).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.90).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.20).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveRightArm_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.40).toEulerAngles()
    });

    var moveLeftArm = new BABYLON.Animation("moveLeftArm_keys", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var moveRightArm = new BABYLON.Animation("moveRightArm_keys", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var moveLeftForearm_keys = [];

    moveLeftForearm_keys.push({
        frame: 0,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.70).toEulerAngles()
    });

    moveLeftForearm_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.60).toEulerAngles()
    });

    moveLeftForearm_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveLeftForearm_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveLeftForearm_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveLeftForearm_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.60).toEulerAngles()
    });

    moveLeftForearm_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.70).toEulerAngles()
    });

    moveLeftForearm_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 1.00).toEulerAngles()
    });
    moveLeftForearm_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.70).toEulerAngles()
    });


    var moveRightForearm_keys = [];
    moveRightForearm_keys.push({
        frame: 0 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveRightForearm_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveRightForearm_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.60).toEulerAngles()
    });

    moveRightForearm_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.70).toEulerAngles()
    });

    moveRightForearm_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 1.00).toEulerAngles()
    });

    moveRightForearm_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.70).toEulerAngles()
    });

    moveRightForearm_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.60).toEulerAngles()
    });

    moveRightForearm_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });
    moveRightForearm_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });


    var moveLeftForearm = new BABYLON.Animation("moveLeftForearm_keys", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var moveRightForearm = new BABYLON.Animation("moveRightForearm_keys", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var moveLeftFoot_keys = [];
    moveLeftFoot_keys.push({
        frame: 0 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.10).toEulerAngles()
    });

    moveLeftFoot_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.30).toEulerAngles()
    });

    moveLeftFoot_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.20).toEulerAngles()
    });

    moveLeftFoot_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveLeftFoot_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.10).toEulerAngles()
    });

    moveLeftFoot_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveLeftFoot_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.10).toEulerAngles()
    });

    moveLeftFoot_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });
    moveLeftFoot_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.10).toEulerAngles()
    });

    var moveRightFoot_keys = [];
    moveRightFoot_keys.push({
        frame: 0 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    moveRightFoot_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.10).toEulerAngles()
    });

    moveRightFoot_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveRightFoot_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.10).toEulerAngles()
    });

    moveRightFoot_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.30).toEulerAngles()
    });

    moveRightFoot_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.20).toEulerAngles()
    });

    moveRightFoot_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.00).toEulerAngles()
    });

    moveRightFoot_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.10).toEulerAngles()
    });
    moveRightFoot_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.40).toEulerAngles()
    });

    var moveLeftFoot = new BABYLON.Animation("moveLeftFoot_keys", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var moveRightFoot = new BABYLON.Animation("moveRightFoot_keys", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    // keys assignment
    moveRightLeg.setKeys(moveRightLeg_keys);
    moveLeftLeg.setKeys(moveLeftLeg_keys);
    moveLeftLegDown.setKeys(moveLeftLegDown_keys);
    moveRightLegDown.setKeys(moveRightLegDown_keys);
    moveLeftArm.setKeys(moveLeftArm_keys);
    moveRightArm.setKeys(moveRightArm_keys);
    moveLeftForearm.setKeys(moveLeftForearm_keys);
    moveRightForearm.setKeys(moveRightForearm_keys);
    moveLeftFoot.setKeys(moveLeftFoot_keys);
    moveRightFoot.setKeys(moveRightFoot_keys);

    // We create an AnimationGroup to aggregate all animations and permits them to start all together
    var animationGroupWalk = new BABYLON.AnimationGroup("Walk");

    animationGroupWalk.addTargetedAnimation(moveRightLeg, character.rt_upperleg);
    animationGroupWalk.addTargetedAnimation(moveLeftLeg, character.lt_upperleg);
    animationGroupWalk.addTargetedAnimation(moveLeftLegDown, character.lt_downleg);
    animationGroupWalk.addTargetedAnimation(moveRightLegDown, character.rt_downleg);
    animationGroupWalk.addTargetedAnimation(moveLeftArm, character.lt_arm);
    animationGroupWalk.addTargetedAnimation(moveRightArm, character.rt_arm);
    animationGroupWalk.addTargetedAnimation(moveLeftForearm, character.lt_forearm);
    animationGroupWalk.addTargetedAnimation(moveRightForearm, character.rt_forearm);
    animationGroupWalk.addTargetedAnimation(moveLeftFoot, character.lt_foot);
    animationGroupWalk.addTargetedAnimation(moveRightFoot, character.rt_foot);
    animationGroupWalk.start(true);
    
    return animationGroupWalk;
}


// Translation position of character on z axis 
function walk(character) {
    var frameRate = 1;

    var xSlide = new BABYLON.Animation("xSlide", "position.z", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keyFrames = [];

    keyFrames.push({
        frame: 0,
        value: character.body.position.z
    });

    keyFrames.push({
        frame: 20 * frameRate,
        value: character.body.position.z - 30
    });
    keyFrames.push({
        frame: 25 * frameRate,
        value: character.body.position.z - 30
    });

    keyFrames.push({
        frame: 45 * frameRate,
        value: character.body.position.z
    });
    keyFrames.push({
        frame: 50 * frameRate,
        value: character.body.position.z
    });
    xSlide.setKeys(keyFrames);


    var YRotation = new BABYLON.Animation("YRotation", "rotation", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keyFrames2 = [];
   
    keyFrames2.push({
        frame: 0 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), 0).toEulerAngles()
    });
    keyFrames2.push({
        frame: 20 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), 0).toEulerAngles()
    }); keyFrames2.push({
        frame: 25 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), Math.PI).toEulerAngles()
    });
    keyFrames2.push({
        frame: 45 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), Math.PI).toEulerAngles()
    });
    keyFrames2.push({
        frame: 50 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), 0).toEulerAngles()
    });

    YRotation.setKeys(keyFrames2);
    
    return scene.beginDirectAnimation(character.body, [xSlide, YRotation], 0, 50 * frameRate, true);
}


// Translation position of character on x axis 
function walk2(character) {
    var frameRate = 1;

    var xSlide = new BABYLON.Animation("xSlide", "position.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keyFrames = [];

    keyFrames.push({
        frame: 0,
        value: character.body.position.x
    });

    keyFrames.push({
        frame: 20 * frameRate,
        value: character.body.position.x - 25
    });
    keyFrames.push({
        frame: 25 * frameRate,
        value: character.body.position.x - 25
    });

    keyFrames.push({
        frame: 45 * frameRate,
        value: character.body.position.x
    });
    keyFrames.push({
        frame: 50 * frameRate,
        value: character.body.position.x
    });

    xSlide.setKeys(keyFrames);
    var YRotation = new BABYLON.Animation("YRotation", "rotation", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keyFrames2 = [];


    keyFrames2.push({
        frame: 0 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), Math.PI/2).toEulerAngles()
    });
    keyFrames2.push({
        frame: 20 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), Math.PI / 2).toEulerAngles()
    }); keyFrames2.push({
        frame: 25 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), 3*Math.PI/2).toEulerAngles()
    });
    keyFrames2.push({
        frame: 45 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), 3 * Math.PI / 2).toEulerAngles()
    });
    keyFrames2.push({
        frame: 50 * frameRate,
        value: BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0, 1, 0), Math.PI / 2).toEulerAngles()
    });

    YRotation.setKeys(keyFrames2);
    return scene.beginDirectAnimation(character.body, [xSlide, YRotation], 0, 50 * frameRate, true);
}