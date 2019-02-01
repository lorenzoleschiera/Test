
var nBullet = 20;

var canvas;
var engine;
var camera;
var scene;
var image;
var character;
var character2;
var character3;
var character4;
var character5;
var skybox;
var animation1;
var animation2;
var sphere = [];
var bullet = null;
var cameraBullet;

var slideZ;
var slideX;
var createScene = function () { 
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true, {
        deterministicLockstep: true,
        lockstepMaxSteps: 4
    });
    scene = new BABYLON.Scene(engine);
    engine.disableManifestCheck = true;
    engine.isPointerLock = false;
    scene.debugLayer.show();
    console.log(SettingValue.gravity);
    scene.enablePhysics(SettingValue.gravity, new BABYLON.OimoJSPlugin());
    scene.getPhysicsEngine().getPhysicsPlugin().world.timeStep = .001;
    //Adding a light
    var light = getLight();

    scene.activeCamera = cameraActivation();

    camera = scene.activeCamera;
    
    //Adding an Follow Camera for Bullet
    cameraBullet = new BABYLON.FollowCamera("CameraBullet", camera.position, scene);

    //Mirino
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    image = new BABYLON.GUI.Image("but", "../textures/mirino.png");
    image.width = "600px";
    image.height = "600px";
    advancedTexture.addControl(image);


    var ground = BABYLON.Mesh.CreateGround("ground1", 60, 60, 2, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0, friction: 1 }, scene);

    skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    var texture = getDaytimeTexture();
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/textures/" + texture + "/skyrender", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    //scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    //scene.fogDensity = 0.001;
    //scene.fogColor = new BABYLON.Color3(0.368, 0.368, 0.431);




    // Move the light with the camera
    scene.registerBeforeRender(function () {


    });

    window.addEventListener('resize', function () {
        engine.resize();
    });

    var assetsManager = new BABYLON.AssetsManager(scene);
    var meshTask = assetsManager.addMeshTask("character task", "", "../assets/", "Character4.babylon");
    
    meshTask.onSuccess = function (task) {
        var newMeshes = task.loadedMeshes;
        // Set the target of the camera to the first imported mesh 


        character = new Character(cloneArray(newMeshes,1));
        character.body.position = new BABYLON.Vector3(86, 3, -64);


        slideZ = walk(character);
        animation1=animation(character);

        character2 = new Character(cloneArray(newMeshes, 2));
        character2.body.position = new BABYLON.Vector3(102, 11.5, -81);
        character2.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI / 2);

        character3 = new Character(cloneArray(newMeshes, 3));
        character3.body.position = new BABYLON.Vector3(72, 12.12, -98);
        character3.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI);

        character4 = new Character(cloneArray(newMeshes, 4));
        character4.body.position = new BABYLON.Vector3(66, 3, -64);
        character4.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI);

        character5 = new Character(cloneArray(newMeshes, 5));
        character5.body.position = new BABYLON.Vector3(68, 3, -90);
        character5.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI/2);

        slideX = walk2(character5);
        animation2=animation(character5);

        engine.runRenderLoop(render);
    };
    meshTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };
    var meshCityTask = assetsManager.addMeshTask("city task", "", "../assets/city/", "city.babylon");
    meshCityTask.onSuccess = function (task) {
        var newMeshes = task.loadedMeshes;
        // Set the target of the camera to the first imported mesh 
        //newMeshes.forEach(function (element) {
        //    element.physicsImpostor = new BABYLON.PhysicsImpostor(element, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0 });
        //}); 


    };
    meshCityTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };
    var meshCollisionerTask = assetsManager.addMeshTask("collisioners task", "", "../assets/", "collisioner.babylon");
    meshCollisionerTask.onSuccess = function (task) {
        var newMeshes = task.loadedMeshes;
        newMeshes.forEach(function (element) {
            element.physicsImpostor = new BABYLON.PhysicsImpostor(element, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, restitution: 0 });
            element.visibility = false;
        }); 


    };
    meshCollisionerTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };
    var bulletMeshTask = assetsManager.addMeshTask("bullet task", "", "../assets/", "bullet.babylon");
    bulletMeshTask.onSuccess = function (task) {
        var bulletMesh = task.loadedMeshes[0];
        var bulletMaterial = new BABYLON.StandardMaterial("Copper", scene);

        bulletMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.2368, 0.1036);
        bulletMaterial.specularColor = new BABYLON.Color3(0.25, 0.148, 0.06475);
        bulletMaterial.ambientColor = new BABYLON.Color3(0.774597, 0.458561, 0.200621);

        bulletMesh.material = bulletMaterial;
        bulletMesh.position = camera.position;

        bulletMesh.isPickable = false;
        sphere.push(bulletMesh);
        for (i = 0; i < nBullet - 1; i++) {
            sphere.push(bulletMesh.clone("bullet " + i));
        }
    };
    bulletMeshTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };
    assetsManager.load();


    document.getElementById("renderCanvas").addEventListener("click", function () {
        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        // Move the sphere upward 1/2 its height
        bullet = sphere[shot];
        bullet.position = camera.position;
        var drctn = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget()).direction;
        bullet.rotate(BABYLON.Axis.Y, camera.rotation.y, BABYLON.Space.LOCAL);
        bullet.rotate(BABYLON.Axis.X, camera.rotation.x, BABYLON.Space.LOCAL);
        bullet.rotate(BABYLON.Axis.Z, camera.rotation.z, BABYLON.Space.LOCAL);

        bullet.physicsImpostor = new BABYLON.PhysicsImpostor(bullet, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 50.5, restitution: 0
        });
        var impulse = drctn.scale(130);
        bullet.physicsImpostor.applyImpulse(impulse, bullet.getAbsolutePivotPoint());

        bullet.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
        shot++;
        //bullet.physicsImpostor.onCollideEvent = hit;
        //Fai partire camera che segue proiettile 
        cameraBullet.heightOffset = 0;
        cameraBullet.radius = 3;
        cameraBullet.rotationOffset = 45;
        cameraBullet.cameraAcceleration = 0.1;
        cameraBullet.lockedTarget = bullet;
        scene.activeCamera = cameraBullet;
        image.isVisible = false;
        timeout = setTimeout(hit, 10000);
        animation1.pause();
        animation2.pause();
        slideZ.pause();
        slideX.pause();
        //reycast(camera.position, drctn);
    });
    return scene;
};
var timeout;
var shot = 0;
function render() {
    if (SettingValue.edited) {
        scene.getPhysicsEngine().setGravity(SettingValue.gravity);

        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        var texture = getDaytimeTexture();
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/textures/" + texture + "/skyrender", scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;

        scene.activeCamera = cameraActivation(); 
        camera = scene.activeCamera;
        SettingValue.edited = false;    
    }
    if (bullet !== null) {
        character.parts.forEach(function (e) {
            if (e.intersectsMesh(bullet, true)) {
                if (character.enablePhysics === false) {
                    setPhysicsToCharacter(character);
                    e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);
                    console.log(bullet.physicsImpostor.getLinearVelocity());
                    console.log(bullet.physicsImpostor.getLinearVelocity().normalize().scale(10));
                }
                bullet.visibility = 0;
                scene.activeCamera = new BABYLON.FollowCamera("Character1", cameraBullet.position, scene); 
                scene.activeCamera.setTarget(character.body.position);
            }
        });
        character2.parts.forEach(function (e) {
            if (e.intersectsMesh(bullet, true)) {
                if (character2.enablePhysics === false) {
                    setPhysicsToCharacter(character2);
                    e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);
                    console.log(bullet.physicsImpostor.getLinearVelocity());
                    console.log(bullet.physicsImpostor.getLinearVelocity().normalize().scale(10));
                }
                bullet.visibility = 0;
                scene.activeCamera = new BABYLON.FollowCamera("Character2", cameraBullet.position, scene);
                scene.activeCamera.setTarget(character2.body.position);
            }
        });
        character3.parts.forEach(function (e) {
            if (e.intersectsMesh(bullet, true)) {
                if (character3.enablePhysics === false) {
                    setPhysicsToCharacter(character3);
                    e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);
                }
                bullet.visibility = 0;
                scene.activeCamera = new BABYLON.FollowCamera("Character3", cameraBullet.position, scene);
                scene.activeCamera.setTarget(character3.body.position);
            }
        });
        character4.parts.forEach(function (e) {
            if (e.intersectsMesh(bullet, true)) {
                if (character4.enablePhysics === false) {
                    setPhysicsToCharacter(character4);
                    e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);
                }
                bullet.visibility = 0;
                scene.activeCamera = new BABYLON.FollowCamera("Character4", cameraBullet.position, scene);
                scene.activeCamera.setTarget(character4.body.position);
            }
        });
        character5.parts.forEach(function (e) {
            if (e.intersectsMesh(bullet, true)) {
                if (character5.enablePhysics === false) {
                    setPhysicsToCharacter(character5);
                    e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);
                }
                bullet.visibility = 0;
                scene.activeCamera = new BABYLON.FollowCamera("Character5", cameraBullet.position, scene);
                scene.activeCamera.setTarget(character5.body.position);
            }
        });
    }
    //if (sphere !== [] && shot > 0 && hitMesh !== null) {
    //    if (sphere[shot - 1].intersectsMesh(hitMesh, true)) { 
    //        sphere[shot - 1].visibility = 0;
    //        hit(sphere[shot - 1], hitMesh);
    //        clearTimeout(timeout);
    //    } 
    //}
    scene.render();
}

var hitMesh;
function reycast(origin, direction) {

    var ray = new BABYLON.Ray(origin, direction, 100);

    let rayHelper = new BABYLON.RayHelper(ray);
    rayHelper.show(scene);

    var hit = scene.pickWithRay(ray);

    if (hit.pickedMesh) {
        console.log(hit.pickedMesh);
        hitMesh = hit.pickedMesh;
    }
}


function hit(main, collided) {
    image.isVisible = true;
    scene.activeCamera = camera;
    cameraBullet.position = camera.position;
    //if (main !== null) {
    //    main.onCollideEvent = null;
    //} else {
    //    sphere[shot - 1].onCollideEvent = null;
    //}
    console.log(animation1);
    animation1.restart();
    animation2.restart();
    slideZ.restart();
    slideX.restart();
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
    if (keyCode === 't') {
        var camerat = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -33), scene);

        // Targets the camera to a particular position. In this case the scene origin
        camerat.setTarget(sphere[0].position);
        // Attach the camera to the canvas
        camerat.attachControl(canvas, true);
        scene.activeCamera = camerat;
        sphere[0].rotate(BABYLON.Axis.Y, camera.rotation.y, BABYLON.Space.LOCAL);
        sphere[0].rotate(BABYLON.Axis.X, camera.rotation.x, BABYLON.Space.LOCAL);
        sphere[0].rotate(BABYLON.Axis.Z, camera.rotation.z, BABYLON.Space.LOCAL);
    }
};

