function Character(scene) {

    //HEAD
    this.head = BABYLON.MeshBuilder.CreateSphere("head", { diameterX: 0.9, diameterY: 1.0, diameterZ: 1.0 }, scene);
    this.head.position.y += 8;

    //NECK
    this.neck = BABYLON.MeshBuilder.CreateCylinder("neck", { height: 0.15, diameter: 0.5 }, scene);
    this.neck.position.y += 7.42;
     

    this.body = BABYLON.MeshBuilder.CreateBox("body", { width: 1.70, height: 1.8, depth: 0.7 }, scene);
    this.body.position.y += 6.45;
    this.body.physicsImpostor = new BABYLON.PhysicsImpostor(this.body, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9, friction: 1 }, scene);

   
    //SHOULDERS
    this.shoulderRight = BABYLON.MeshBuilder.CreateSphere("shoulderR", { diameterZ: 0.7, diameterY: 0.5, diameterX: 0.5 }, scene);
    this.shoulderRight.position.x = 1.2;
    this.shoulderRight.position.y = 7.1;
    this.shoulderLeft = BABYLON.MeshBuilder.CreateSphere("shoulderL", { diameterZ: 0.7, diameterY: 0.5, diameterX: 0.5 }, scene);
    this.shoulderLeft.position.x = -1.2;
    this.shoulderLeft.position.y = 7.1;

    //ARMS
    this.armRight = BABYLON.MeshBuilder.CreateCylinder("armR", { height: 1, diameter: 0.5, enclose: true }, scene);
    this.armRight.position.x += 1.2;
    this.armRight.position.y += 6.35;
    this.armLeft = BABYLON.MeshBuilder.CreateCylinder("armL", { height: 1, diameter: 0.5, enclose: true }, scene);
    this.armLeft.position.x += -1.2;
    this.armLeft.position.y += 6.35;

    this.armRight.physicsImpostor = new BABYLON.PhysicsImpostor(this.armRight, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 1, restitution: 0.9, friction: 1 }, scene);
    this.armLeft.physicsImpostor = new BABYLON.PhysicsImpostor(this.armLeft, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 1, restitution: 0.9, friction: 1 }, scene);


    var jointArmRightBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.PointToPointJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(1.3, 0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.6, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 1),
        connectedAxis: new BABYLON.Vector3( -1, 0,-1) 

    });
    this.body.physicsImpostor.addJoint(this.armRight.physicsImpostor, jointArmRightBody);

    var jointArmLeftBody = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.PointToPointJoint, {
        collision: false,
        mainPivot: new BABYLON.Vector3(-1.3, 0.5, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.6, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 0),
        connectedAxis: new BABYLON.Vector3(-1, 0, 0)

    });
    this.body.physicsImpostor.addJoint(this.armLeft.physicsImpostor, jointArmLeftBody);


    //FOREARMS

    this.forearmRight = BABYLON.MeshBuilder.CreateCylinder("forearmR", { height: 1, diameter: 0.5, enclose: true }, scene);
    this.forearmRight.position.x += 1.2;
    this.forearmRight.position.y += 5.35;
    this.forearmLeft = BABYLON.MeshBuilder.CreateCylinder("forearmL", { height: 1, diameter: 0.5, enclose: true }, scene);
    this.forearmLeft.position.x += -1.2;
    this.forearmLeft.position.y += 5.35;


    this.forearmRight.physicsImpostor = new BABYLON.PhysicsImpostor(this.forearmRight, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.2, restitution: 0.9, friction: 1 }, scene);
    this.forearmLeft.physicsImpostor = new BABYLON.PhysicsImpostor(this.forearmLeft, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.2, restitution: 0.9, friction: 1 }, scene);


    var jointForeArmToArmRight = new BABYLON.HingeJoint({

         collision : false,
        mainPivot: new BABYLON.Vector3(0,  -0.6, 0),
        connectedPivot: new BABYLON.Vector3(0,0.5, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 0),
        connectedAxis: new BABYLON.Vector3(-1, 0, 0),
        nativeParams: {
            min: -20,
            max: 200
            //spring: [0, 0] 
        }
    }); 
    this.armRight.physicsImpostor.addJoint(this.forearmRight.physicsImpostor, jointForeArmToArmRight);  

    var jointForeArmToArmLeft = new BABYLON.HingeJoint({

        collision: false,
        mainPivot: new BABYLON.Vector3(0, -0.6, 0),
        connectedPivot: new BABYLON.Vector3(0, 0.5, 0),
        mainAxis: new BABYLON.Vector3(1, 0, 0),
        connectedAxis: new BABYLON.Vector3(-1, 0, 0),
        nativeParams: {
            min: -20,
            max: 200
            //spring: [0, 0] 
        }
    });
    this.armLeft.physicsImpostor.addJoint(this.forearmLeft.physicsImpostor, jointForeArmToArmLeft);  


    //LEGS
    this.legLeft = BABYLON.MeshBuilder.CreateCylinder("legL", { height: 2, diameterTop: 0.7, diameterBottom: 0.5, enclose: true }, scene);
    this.legRight = BABYLON.MeshBuilder.CreateCylinder("legR", { height: 2, diameterTop: 0.7, diameterBottom: 0.5, enclose: true }, scene);
    this.legLeft.position.x -= 0.5;
    this.legRight.position.x += 0.5;
    this.legLeft.position.y += 4.55;
    this.legRight.position.y += 4.55;

    //LOWERLEGS
    this.lowlegLeft = BABYLON.MeshBuilder.CreateCylinder("lowlegL", { height: 2, diameterTop: 0.5, diameterBottom: 0.5, enclose: true }, scene);
    this.lowlegRight = BABYLON.MeshBuilder.CreateCylinder("lowlegR", { height: 2, diameterTop: 0.5, diameterBottom: 0.5, enclose: true }, scene);
    this.lowlegLeft.position.x -= 0.5;
    this.lowlegRight.position.x += 0.5;
    this.lowlegLeft.position.y += 2.55;
    this.lowlegRight.position.y += 2.55;
    

}


var chara;

var bar2; 
var bar1;
var canvas;
var engine;
var scene;
var createScene = function () {
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);
    engine.disableManifestCheck = true;

    // Create a basic BJS Scene object.

    scene.debugLayer.show();
    scene.enablePhysics(new BABYLON.Vector3(0, -9.81, 0), new BABYLON.OimoJSPlugin(200));
    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, -2, new BABYLON.Vector3(0, 0, -50), scene);
    camera.attachControl(canvas, false);


    var ground = BABYLON.Mesh.CreateGround("ground1", 60, 60, 2, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.PlaneImpostor, { mass: 0, restitution: 0.2, friction: 11 }, scene);

    chara = new Character(scene);
    //bar1 = BABYLON.MeshBuilder.CreateBox("box1", { width: 5, height: 1, depth: 1 }, scene);
    //bar1.position.y += 25;

    //bar2 = BABYLON.MeshBuilder.CreateBox("box2", { width: 1, height: 5, depth: 1 }, scene);
    //bar2.position.y += 20;

    //bar1.physicsImpostor = new BABYLON.PhysicsImpostor(bar1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.2, friction: 11 }, scene);
    //var joint1 = new BABYLON.PhysicsJoint(BABYLON.PhysicsJoint.PointToPointJoint, {
    //    //collision : true,
    //    mainPivot: new BABYLON.Vector3(2.9, 0, 0),
    //    connectedPivot: new BABYLON.Vector3(0, 2.5, 0),
    //    mainAxis: new BABYLON.Vector3(1, 0, 0)

    //});
    //bar2.setPivotPoint(new BABYLON.Vector3(0.1, 0, 0),false);
    //bar2.physicsImpostor = new BABYLON.PhysicsImpostor(bar2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9, friction: 1 }, scene);

    //bar1.physicsImpostor.addJoint(bar2.physicsImpostor, joint1);

    

    

    // Move the light with the camera
    scene.registerBeforeRender(function () {
        light.position = camera.position;

    });


    window.addEventListener('resize', function () {
        engine.resize();
    });

    engine.runRenderLoop(render);

    return scene;
};


function render() {
    scene.render();
     
} 

function push() {
    chara.armRight.physicsImpostor.applyImpulse(new BABYLON.Vector3(-30, 0, 0), chara.armRight.getAbsolutePosition());


}