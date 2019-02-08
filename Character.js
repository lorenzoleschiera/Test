// returns the copy of an array, used to clone the characters
function cloneArray(array, index) {
    var cloned = [];
    array.forEach(function (e) {
        cloned.push(e.clone(e.name + index));
    });
    return cloned;
}

function Character(mesh) {
    this.parts = mesh;
    this.head = mesh[0];
    this.head.state = "2000";
    this.neck = mesh[1];
    this.neck.state = "1400";
    this.body = mesh[2];
    this.body.state = "1000";
    this.rt_forearm = mesh[8];
    this.rt_forearm.state = "400";
    this.lt_forearm = mesh[5];
    this.lt_forearm.state = "400";
    this.rt_arm = mesh[14];
    this.rt_arm.state = "400";
    this.lt_arm = mesh[4];
    this.lt_arm.state = "400";
    this.rt_hand = mesh[11];
    this.rt_hand.state = "200";
    this.lt_hand = mesh[3];
    this.lt_hand.state = "200";
    this.rt_upperleg = mesh[9];
    this.rt_upperleg.state = "400";
    this.lt_upperleg = mesh[6];
    this.lt_upperleg.state = "400";
    this.rt_downleg = mesh[10];
    this.rt_downleg.state = "400";
    this.lt_downleg = mesh[7];
    this.lt_downleg.state = "400";
    this.rt_foot = mesh[13];
    this.rt_foot.state = "200";
    this.lt_foot = mesh[12];
    this.lt_foot.state = "200";

    this.enablePhysics = false;


    this.lt_arm.addChild(this.lt_forearm);
    this.lt_forearm.addChild(this.lt_hand);
    this.rt_arm.addChild(this.rt_forearm);
    this.rt_forearm.addChild(this.rt_hand);
    this.lt_downleg.addChild(this.lt_foot);
    this.lt_upperleg.addChild(this.lt_downleg);
    this.rt_downleg.addChild(this.rt_foot);
    this.rt_upperleg.addChild(this.rt_downleg);
    this.neck.addChild(this.head);
    this.body.addChild(this.neck);
    this.body.addChild(this.lt_arm);
    this.body.addChild(this.rt_arm);
    this.body.addChild(this.lt_upperleg);
    this.body.addChild(this.rt_upperleg);
}


function setPhysicsToCharacter(character) {
    /*
     * We remove at all parts of character their children because
     * otherwise the physics is the aggregation to the parent
     * es: if I put the physic on the hand and on the forearm,
     * the engine put the sum of two physics only on the forearm
     */
    character.lt_arm.removeChild(character.lt_forearm);
    character.lt_forearm.removeChild(character.lt_hand);
    character.rt_arm.removeChild(character.rt_forearm);
    character.rt_forearm.removeChild(character.rt_hand);
    character.lt_downleg.removeChild(character.lt_foot);
    character.lt_upperleg.removeChild(character.lt_downleg);
    character.rt_downleg.removeChild(character.rt_foot);
    character.rt_upperleg.removeChild(character.rt_downleg);
    character.neck.removeChild(character.head);
    character.body.removeChild(character.neck);
    character.body.removeChild(character.lt_arm);
    character.body.removeChild(character.rt_arm);
    character.body.removeChild(character.lt_upperleg);
    character.body.removeChild(character.rt_upperleg);

    /* Inseriamo l'impostore per ogni parte del corpo, con il suo peso, restitution( la forza elastica che esercita su un corpo che collide con esso),
     * potremmo aggiungere anche la friction: ovvero l'attrito.
     */

    character.rt_hand.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_hand, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });
    character.lt_hand.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_hand, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });

    character.rt_forearm.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_forearm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });
    character.lt_forearm.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_forearm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });

    character.rt_arm.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_arm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });
    character.lt_arm.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_arm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });

    character.rt_foot.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_foot, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 50, restitution: 0 });
    character.lt_foot.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_foot, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 50, restitution: 0 });

    character.rt_downleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_downleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });
    character.lt_downleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_downleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });

    character.rt_upperleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_upperleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });
    character.lt_upperleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_upperleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });

    character.head.physicsImpostor = new BABYLON.PhysicsImpostor(character.head, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 5, restitution: 0 });
    character.neck.physicsImpostor = new BABYLON.PhysicsImpostor(character.neck, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 0 });

    character.body.physicsImpostor = new BABYLON.PhysicsImpostor(character.body, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 5, restitution: 0 });

    /*Ora problema: se noi lasciassimo tutto così, ogni parte del corpo si comporterebbe in maniera indipendente da ogni altra.
     * Per ovviare a questo comportamento che non è quello che vogliamo realizzare, abbiamo bisogno di uno strumento di babylon (nessuno può mettere babylon in un angolo)
     * ovvero i Joints (giunture e si comportano come tali)
     */

    //Joint arms
    var jointArmRightBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(-0.45, 0.6, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.4, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.body.physicsImpostor.addJoint(character.rt_arm.physicsImpostor, jointArmRightBody);

    var jointArmLeftBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0.45, 0.6, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.4, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.body.physicsImpostor.addJoint(character.lt_arm.physicsImpostor, jointArmLeftBody);


    //Joint forearms
    var jointForeArmRightBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(-0.1, -0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.3, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.rt_arm.physicsImpostor.addJoint(character.rt_forearm.physicsImpostor, jointForeArmRightBody);

    var jointForeArmLeftBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0.1, -0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.3, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.lt_arm.physicsImpostor.addJoint(character.lt_forearm.physicsImpostor, jointForeArmLeftBody);


    //Joint hands
    var jointHandRightBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0, -0.4, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.15, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 0),
        connectedAxis: new BABYLON.Vector3(-1, 0, 0)

    });
    character.rt_forearm.physicsImpostor.addJoint(character.rt_hand.physicsImpostor, jointHandRightBody);

    var jointHandLeftBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0, -0.4, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.15, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 0),
        connectedAxis: new BABYLON.Vector3(1, 0, 0)

    });
    character.lt_forearm.physicsImpostor.addJoint(character.lt_hand.physicsImpostor, jointHandLeftBody);


    //Joint upperlegs
    var jointUpperLegRightBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(-0.2, -0.75, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.5, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.body.physicsImpostor.addJoint(character.rt_upperleg.physicsImpostor, jointUpperLegRightBody);

    var jointUpperLegLeftBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0.2, -0.75, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.5, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.body.physicsImpostor.addJoint(character.lt_upperleg.physicsImpostor, jointUpperLegLeftBody);


    //Joint lowerlegs
    var jointLowerLegRight = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(-0.05, -0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.5, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.rt_upperleg.physicsImpostor.addJoint(character.rt_downleg.physicsImpostor, jointLowerLegRight);

    var jointLowerLegLeft = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0.05, -0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.5, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.lt_upperleg.physicsImpostor.addJoint(character.lt_downleg.physicsImpostor, jointLowerLegLeft);


    //Joint Foot
    var jointFeetRight = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0, -0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.05, 0.06),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.rt_downleg.physicsImpostor.addJoint(character.rt_foot.physicsImpostor, jointFeetRight);

    var jointFeetLeft = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0, -0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.05, 0.06),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.lt_downleg.physicsImpostor.addJoint(character.lt_foot.physicsImpostor, jointFeetLeft);


    //Joint Neck Head
    var jointNeck = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0, 0.9, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.0, 0.0),
        mainAxis: new BABYLON.Vector3(0, 1, 1),
        connectedAxis: new BABYLON.Vector3(0, -1, -1)

    });
    character.body.physicsImpostor.addJoint(character.neck.physicsImpostor, jointNeck);

    var jointHead = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.HingeJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(0, 0, 0),
        connectedPivot: new BABYLON.Vector3(0, -0.3, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3(-1, 0, -1)

    });
    character.neck.physicsImpostor.addJoint(character.head.physicsImpostor, jointHead);


    character.enablePhysics = true;
}