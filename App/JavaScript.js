
var nBullet = 9;
var txtBullets;

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
var text1;
var slideZ;
var slideX;
var particleSystem;

var createScene = function () {
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true, {
        deterministicLockstep: true,
        lockstepMaxSteps: 4
    });
    scene = new BABYLON.Scene(engine); 
    engine.isPointerLock = true; 

    scene.enablePhysics(SettingValue.gravity, new BABYLON.OimoJSPlugin());
    scene.getPhysicsEngine().getPhysicsPlugin().world.timeStep = .001;



    //Adding a light
    var light = getLight();

    //Activate camera
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

    //points rectangle
    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = "150px";
    rect1.height = "40px";
    rect1.cornerRadius = 20;
    rect1.color = "GoldenRod";
    rect1.thickness = 4;
    rect1.background = "DarkGreen";
    rect1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    rect1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    rect1.top = "25px";
    rect1.left = "50px";
    advancedTexture.addControl(rect1);

    //points text
    text1 = new BABYLON.GUI.TextBlock();
    text1.text = "00,000";
    text1.color = "white";
    text1.fontSize = 34;
    text1.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    text1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    text1.top = "28px";
    text1.left = "75px";
    advancedTexture.addControl(text1);

    //remaining bullet image
    var imageRemainBullets = new BABYLON.GUI.Image("bullet", "../textures/bullet.png");
    imageRemainBullets.width = "150px";
    imageRemainBullets.height = "120px";
    imageRemainBullets.top = "-10px";
    imageRemainBullets.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    imageRemainBullets.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    advancedTexture.addControl(imageRemainBullets);

    //text remaining bullet 
    txtBullets = new BABYLON.GUI.TextBlock();
    txtBullets.text = nBullet + "";
    txtBullets.color = "white";
    txtBullets.fontSize = 34;
    txtBullets.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    txtBullets.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    txtBullets.top = "-50px";
    txtBullets.left = "-63px";
    advancedTexture.addControl(txtBullets);


    //Texture for the sky
    skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    var texture = getDaytimeTexture();
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/textures/" + texture + "/skyrender", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    //add music
    var music = new BABYLON.Sound("Music", "../sound/cataclysmic.mp3", scene, null, { loop: true, autoplay: true });

    
    window.addEventListener('resize', function () {
        engine.resize();
    });

    // with assetsManager we import the model of babylon
    var assetsManager = new BABYLON.AssetsManager(scene);

    //Import character
    var meshTask = assetsManager.addMeshTask("character task", "", "../assets/", "Character4.babylon");
    meshTask.onSuccess = function (task) {
        var newMeshes = task.loadedMeshes;
        Start(newMeshes);
    };

    meshTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };

    // Import city
    var meshCityTask = assetsManager.addMeshTask("city task", "", "../assets/city/", "city.babylon");
    meshCityTask.onSuccess = function (task) {
        var newMeshes = task.loadedMeshes; 
    };
    meshCityTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };

    //Import Collision bloks 
    var meshCollisionerTask = assetsManager.addMeshTask("collisioners task", "", "../assets/", "collisioner.babylon");
    meshCollisionerTask.onSuccess = function (task) {
        var newMeshes = task.loadedMeshes;
        newMeshes.forEach(function (element) {
            element.physicsImpostor = new BABYLON.PhysicsImpostor(element, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 });
            element.visibility = false; //invisible block
        });
    };
    meshCollisionerTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };

    // Import bullet
    var bulletMeshTask = assetsManager.addMeshTask("bullet task", "", "../assets/", "bullet.babylon");
    bulletMeshTask.onSuccess = function (task) {
        var bulletMesh = task.loadedMeshes[0];
        var bulletMaterial = new BABYLON.StandardMaterial("Copper", scene);

        bulletMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.2368, 0.1036);
        bulletMaterial.specularColor = new BABYLON.Color3(0.25, 0.148, 0.06475);
        bulletMaterial.ambientColor = new BABYLON.Color3(0.774597, 0.458561, 0.200621);

        bulletMesh.material = bulletMaterial;
        bulletMesh.position = camera.position;
        
        sphere.push(bulletMesh);
        for (i = 0; i < nBullet - 1; i++) {
            sphere.push(bulletMesh.clone("bullet " + i));
        }
    };
    bulletMeshTask.onError = function (task, message, exception) {
        console.log(message, exception);
    };

    // Render function
    engine.runRenderLoop(render);

    // load all task assigned: imports of the "objects"
    assetsManager.load();

    //sound of fire
    var gunshot = new BABYLON.Sound("gunshot", "../sound/shot.mp3", scene);

    // impostiamo un listener in modo che quando clicchiamo, accade qualcosa (in questo caso il proiettile viene sparato)
    document.getElementById("renderCanvas").addEventListener("click", function () {
        gunshot.play();

        bullet = sphere[shot];
        bullet.position = camera.position;

        //direction of the bullet calculated by the different position between camara position and targhet.
        var drctn = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget()).direction;

        //set the orientation of the bullet according to the tirection of camera in order to apply correctly the impulse to the bullet
        bullet.rotate(BABYLON.Axis.Y, camera.rotation.y, BABYLON.Space.LOCAL);
        bullet.rotate(BABYLON.Axis.X, camera.rotation.x, BABYLON.Space.LOCAL);
        bullet.rotate(BABYLON.Axis.Z, camera.rotation.z, BABYLON.Space.LOCAL);

        bullet.physicsImpostor = new BABYLON.PhysicsImpostor(bullet, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 50.5, restitution: 0
        });

        var impulse = drctn.scale(130);
        bullet.physicsImpostor.applyImpulse(impulse, bullet.getAbsolutePivotPoint()); //apply the impulse to bullet

        bullet.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
        shot++;

        //delay the starting of bullet in order to coordinate it with the sound shot
        sleep(600);

       
        // Update the remaining bullet
        txtBullets.text = (nBullet - shot) + "";

        //camera thet follows the bullet
        cameraBullet.heightOffset = 0;
        cameraBullet.radius = 3;
        cameraBullet.rotationOffset = 45;
        cameraBullet.cameraAcceleration = 0.1;
        cameraBullet.lockedTarget = bullet; // <- specify what the camera follows
        scene.activeCamera = cameraBullet;

        //eliminate the viewercross
        image.isVisible = false;

        //time of fly
        timeout = setTimeout(hit, 9000);

        //stop all of animations during the fly
        animation1.pause();
        slideZ.pause();
        if (SettingValue.characters === 5) {
            animation2.pause();
            slideX.pause();
        }
        // slow down animition
        scene.getPhysicsEngine().getPhysicsPlugin().world.timeStep = 0.001;
    });
    return scene;
};


var hits;
var timeout;
var shot = 0;
// Render function
function render() {
    // if the settings game are modified
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

                    //hits is the vector used to stopped the animated character after their hit, in order to evitate that they continue to move after dead 
                    hits[0] = true;
                    var pointsHit = parseInt(e.state);
                    var points = parseInt(text1.text.replace(/,/g, "")) + pointsHit;
                    text1.text = points.toLocaleString('en', { minimumIntegerDigits: 5 });

                    var matBox2 = new BABYLON.StandardMaterial("matBox2", scene);
                    matBox2.diffuseColor = new BABYLON.Color3(1, 0, 0);
                    e.material = matBox2;
                }

                bullet.visibility = 0;

                //create a new camera that follows the chacarter hitted
                scene.activeCamera = new BABYLON.FollowCamera("Character1", cameraBullet.position, scene);
                scene.activeCamera.setTarget(character.body.position);

                clearTimeout(timeout);
                timeout = setTimeout(hit, 6000);
            }
        });
        character2.parts.forEach(function (e) {
            if (e.intersectsMesh(bullet, true)) {
                if (character2.enablePhysics === false) {
                    setPhysicsToCharacter(character2);
                    e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);

                    hits[1] = true;
                    var pointsHit = parseInt(e.state);
                    var points = parseInt(text1.text.replace(/,/g, "")) + pointsHit;
                    text1.text = points.toLocaleString('en', { minimumIntegerDigits: 5 });

                    console.log(e.material);

                    var matBox2 = new BABYLON.StandardMaterial("matBox2", scene);
                    matBox2.diffuseColor = new BABYLON.Color3(1, 0, 0);
                    e.material = matBox2;
                }
                bullet.visibility = 0;
                scene.activeCamera = new BABYLON.FollowCamera("Character2", cameraBullet.position, scene);
                scene.activeCamera.setTarget(character2.body.position);
                clearTimeout(timeout);
                timeout = setTimeout(hit, 6000);
            }
        });
        character3.parts.forEach(function (e) {
            if (e.intersectsMesh(bullet, true)) {
                if (character3.enablePhysics === false) {
                    setPhysicsToCharacter(character3);
                    e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);

                    var pointsHit = parseInt(e.state);
                    var points = parseInt(text1.text.replace(/,/g, "")) + pointsHit;
                    text1.text = points.toLocaleString('en', { minimumIntegerDigits: 5 });

                    hits[2] = true;
                    var matBox2 = new BABYLON.StandardMaterial("matBox2", scene);
                    matBox2.diffuseColor = new BABYLON.Color3(1, 0, 0);
                    e.material = matBox2;
                }
                bullet.visibility = 0;
                scene.activeCamera = new BABYLON.FollowCamera("Character3", cameraBullet.position, scene);
                scene.activeCamera.setTarget(character3.body.position);
                clearTimeout(timeout);
                timeout = setTimeout(hit, 6000);
            }
        });
        if (SettingValue.characters >= 4) {
            character4.parts.forEach(function (e) {
                if (e.intersectsMesh(bullet, true)) {
                    if (character4.enablePhysics === false) {
                        setPhysicsToCharacter(character4);
                        e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);

                        hits[3] = true;
                        var pointsHit = parseInt(e.state);
                        var points = parseInt(text1.text.replace(/,/g, "")) + pointsHit;
                        text1.text = points.toLocaleString('en', { minimumIntegerDigits: 5 });

                        var matBox2 = new BABYLON.StandardMaterial("matBox2", scene);
                        matBox2.diffuseColor = new BABYLON.Color3(1, 0, 0);
                        e.material = matBox2;
                    }
                    bullet.visibility = 0;
                    scene.activeCamera = new BABYLON.FollowCamera("Character4", cameraBullet.position, scene);
                    scene.activeCamera.setTarget(character4.body.position);
                    clearTimeout(timeout);
                    timeout = setTimeout(hit, 6000);
                }
            });
        }
        if (SettingValue.characters === 5) {
            character5.parts.forEach(function (e) {
                if (e.intersectsMesh(bullet, true)) {
                    if (character5.enablePhysics === false) {
                        setPhysicsToCharacter(character5);
                        e.physicsImpostor.applyImpulse(bullet.physicsImpostor.getLinearVelocity().normalize().scale(30), bullet.position);

                        hits[4] = true;
                        var pointsHit = parseInt(e.state);
                        var points = parseInt(text1.text.replace(/,/g, "")) + pointsHit;
                        text1.text = points.toLocaleString('en', { minimumIntegerDigits: 5 });

                        var matBox2 = new BABYLON.StandardMaterial("matBox2", scene);
                        matBox2.diffuseColor = new BABYLON.Color3(1, 0, 0);
                        e.material = matBox2;
                    }
                    bullet.visibility = 0;
                    scene.activeCamera = new BABYLON.FollowCamera("Character5", cameraBullet.position, scene);
                    scene.activeCamera.setTarget(character5.body.position);
                    clearTimeout(timeout);
                    timeout = setTimeout(hit, 6000);

                }
            });
        }
    }
    scene.render();
}


function hit(main, collided) {
    image.isVisible = true;
    scene.activeCamera = camera;
    cameraBullet.position = camera.position;
    scene.getPhysicsEngine().getPhysicsPlugin().world.timeStep = 0.01;
    if (!hits[0]) {
        animation1.restart();
        slideZ.restart();
    }
    if (!hits[4] && SettingValue.characters === 5) {
        animation2.restart();
        slideX.restart();
    }
    // in order to verify if all characters are dead
    if (!hits.includes(false)) {
        var points = parseInt(text1.text.replace(/,/g, "")) + (nBullet - shot) * 1000;
        text1.text = points.toLocaleString('en', { minimumIntegerDigits: 5 });
        EndGame("Hey buddy, you kill all! You win! \n Your score is: " + points.toLocaleString('en'));
    } else {
        if (nBullet - shot === 0) {
            EndGame("Hey buddy, your weapon is empty! You have finished the shots! \n Your score is: " + text1.text);
        }
    }
}



function EndGame(endingString) {
    $("#ending").dialog({
        dialogClass: "no-close",
        width: 512
    });
    $("#btnRestart").click(function (event) {
        event.preventDefault();
        location.reload();
    });
    $("#btnQuit").click(function (event) {
        event.preventDefault();
        window.location.href = "StartPage.html";
    });
    $("#txtEnding").text(endingString);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function Start(newMeshes) {
    $("#starting").dialog({
        dialogClass: "no-close",
        width: 512
    });
    $("#btn3Characters").click(function (event) {
        event.preventDefault();
        $("#btn3Characters").addClass("selected");
        $("#btn4Characters").removeClass("selected");
        $("#btn5Characters").removeClass("selected");
        SettingValue.characters = 3;
        SettingValue.selectedCharacters = true;
    });
    $("#btn4Characters").click(function (event) {
        event.preventDefault();
        $("#btn4Characters").addClass("selected");
        $("#btn3Characters").removeClass("selected");
        $("#btn5Characters").removeClass("selected");
        SettingValue.characters = 4;
        SettingValue.selectedCharacters = true;
    });
    $("#btn5Characters").click(function (event) {
        event.preventDefault();
        $("#btn5Characters").addClass("selected");
        $("#btn3Characters").removeClass("selected");
        $("#btn4Characters").removeClass("selected");
        SettingValue.characters = 5;
        SettingValue.selectedCharacters = true;
    });
    $("#btnPlay").click(function (event) {


        hits = [];
        for (var i = 0; i < SettingValue.characters; i++) {
            hits.push(false);
        }
        if (SettingValue.characters === 5) {
            character5 = new Character(cloneArray(newMeshes, 5));
            character5.body.position = new BABYLON.Vector3(68, 3, -90);
            character5.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI / 2);

            slideX = walk2(character5);
            animation2 = animation(character5);
        }
        if (SettingValue.characters >= 4) {
            character4 = new Character(cloneArray(newMeshes, 4));
            character4.body.position = new BABYLON.Vector3(66, 3, -64);
            character4.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI);
        }

        character = new Character(cloneArray(newMeshes, 1));
        character.body.position = new BABYLON.Vector3(86, 3, -64);
        slideZ = walk(character);
        animation1 = animation(character);

        character2 = new Character(cloneArray(newMeshes, 2));
        character2.body.position = new BABYLON.Vector3(102, 11.5, -81);
        character2.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI / 2);

        character3 = new Character(cloneArray(newMeshes, 3));
        character3.body.position = new BABYLON.Vector3(72, 12.12, -98);
        character3.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI);

    
        $("#starting").dialog("close");
    });
}
