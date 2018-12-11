 
function Character(mesh) {
    this.parts = mesh;
    this.head = mesh[0];
    this.neck = mesh[1];
    this.body = mesh[2]; 
    this.rt_forearm = mesh[8];
    this.lt_forearm = mesh[5];
    this.rt_arm = mesh[14];
    this.lt_arm = mesh[4];
    this.rt_hand = mesh[11];
    this.lt_hand = mesh[3];
    this.rt_upperleg = mesh[9];
    this.lt_upperleg = mesh[6];
    this.rt_downleg = mesh[10];
    this.lt_downleg = mesh[7];
    this.rt_foot = mesh[13];
    this.lt_foot = mesh[12];

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
   
    character.rt_hand.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_hand, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });
    character.lt_hand.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_hand, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });

    character.rt_forearm.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_forearm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });
    character.lt_forearm.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_forearm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });

    character.rt_arm.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_arm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });
    character.lt_arm.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_arm, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });
   
    character.rt_foot.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_foot, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });
    character.lt_foot.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_foot, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });

    character.rt_downleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_downleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });
    character.lt_downleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_downleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });

    character.rt_upperleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.rt_upperleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });
    character.lt_upperleg.physicsImpostor = new BABYLON.PhysicsImpostor(character.lt_upperleg, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });

    character.head.physicsImpostor = new BABYLON.PhysicsImpostor(character.head, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 5, restitution: 1 });
    character.neck.physicsImpostor = new BABYLON.PhysicsImpostor(character.neck, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 5, restitution: 1 });

    character.body.physicsImpostor = new BABYLON.PhysicsImpostor(character.body, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 5, restitution: 1 });

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

var nBullet = 30;

var canvas;
var engine;
var scene;
var character;
var sphere = [];
var createScene = function () {
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true,{
        deterministicLockstep: true,
        lockstepMaxSteps: 4
    });
    scene = new BABYLON.Scene(engine);
    engine.disableManifestCheck = true;
    engine.isPointerLock = false;
    scene.debugLayer.show();
    scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), new BABYLON.OimoJSPlugin());
    scene.getPhysicsEngine().getPhysicsPlugin().world.timeStep = .001;
    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 3, -35), scene); 
    camera.attachControl(canvas, true);

    //Adding an Follow Camera for Bullet
    var cameraBullet = new BABYLON.FollowCamera("CameraBullet", camera.position, scene);

    //Mirino
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var image = new BABYLON.GUI.Image("but", "../textures/mirino.png");
    image.width = "600px";
    image.height = "600px"; 
    advancedTexture.addControl(image);
    

    // Move the light with the camera
    scene.registerBeforeRender(function () {
        light.position = camera.position;

    });


    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.ImportMesh("", "../assets/", "Character4.babylon", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh 

        console.log(newMeshes.map(a => a.name));
        var ground = BABYLON.Mesh.CreateGround("ground1", 60, 60, 2, scene);
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 1 }, scene);


        character = new Character(newMeshes); 

        window.addEventListener('resize', function () {
            engine.resize();
        });
        for (i = 0; i < nBullet; i++) {
            sphere.push(BABYLON.Mesh.CreateSphere("sphere1", 16, 0.1, scene));
            sphere[i].position = camera.position;
        }
        engine.runRenderLoop(render);

    });
    // Return the created scene.
     
    document.getElementById("renderCanvas").addEventListener("click", function () {
        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        // Move the sphere upward 1/2 its height
        
        var bullet = sphere[shot];
        bullet.position = camera.position;
        var drctn = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget()).direction;
        var impulse = drctn.scale(80); 
        bullet.physicsImpostor = new BABYLON.PhysicsImpostor(bullet, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 500.5, restitution: 0 }); 
        bullet.physicsImpostor.applyImpulse(impulse, bullet.position);  
        shot++;
        bullet.physicsImpostor.onCollideEvent = function (main, collided) {
            image.isVisible = true;
            scene.activeCamera = camera;
            main.onCollideEvent = null;
        };
        //Fai partire camera che segue proiettile 
        cameraBullet.heightOffset = 0;
        cameraBullet.radius = 5;
        cameraBullet.rotationOffset = 180;
        cameraBullet.lockedTarget = bullet;
        scene.activeCamera = cameraBullet;
        image.isVisible = false;
    });

    return scene;
}; 
var shot = 0;
function render() {
    for (i = 0; i < sphere.length; i++) {
        character.parts.forEach(function (e) {
            if (e.intersectsMesh(sphere[i], true)) { 
                if (character.enablePhysics === false)
                    setPhysicsToCharacter(character);
                //sphere[i].visibility = 0;
            }
        });
    }
    scene.render();

} 

document.onkeydown = function (e) {
    var keyCode = e.key;
    if (keyCode === 'm') {
        animation();
    }
    if (keyCode === 'o') {
        scene.getPhysicsEngine().getPhysicsPlugin().world.timeStep = 0.01;
    }
    if (keyCode === 'p') {
        scene.getPhysicsEngine().getPhysicsPlugin().world.timeStep = 0.001;
    }
};

function animation() {
    character.body.rotation.y += Math.PI/2;
    var frameRate = 10;
    //for camera move forward
    var movein = new BABYLON.Animation("movein", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var axis = new BABYLON.Vector3(1, 0, 0);

    var moveRightLeg_keys = [];

    moveRightLeg_keys.push({
        frame: 0,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.28).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.35).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.87).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.59).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.59).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.09).toEulerAngles()
    });

    moveRightLeg_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.35).toEulerAngles()
    });
    moveRightLeg_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.28).toEulerAngles()
    });



    var moveLeftLeg = new BABYLON.Animation("moveLeftLeg", "rotation", 5, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    var moveLeftLeg_keys = [];
    moveLeftLeg_keys.push({
        frame: 0 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.59).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 1 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.59).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 2 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.09).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 3 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.35).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, -0.28).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 5 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.35).toEulerAngles()
    });

    moveLeftLeg_keys.push({
        frame: 7 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.87).toEulerAngles()
    });
    moveLeftLeg_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Quaternion.RotationAxis(axis, 0.59).toEulerAngles()
    });

    console.log(new BABYLON.Quaternion.RotationAxis(axis, Math.PI/2).toEulerAngles());
    movein.setKeys(moveRightLeg_keys);
    moveLeftLeg.setKeys(moveLeftLeg_keys);

    var animationGroupWalk = new BABYLON.AnimationGroup("Walk");
    animationGroupWalk.addTargetedAnimation(movein, character.rt_upperleg);
    animationGroupWalk.addTargetedAnimation(moveLeftLeg, character.lt_upperleg);
    animationGroupWalk.play(true);
}
