
function SettingValue() { // constructor function
    
}
// static variables. Default values 
SettingValue.gravity = new BABYLON.Vector3(0, -9.8, 0);  
SettingValue.daytime = 2;
SettingValue.placement = 0;
SettingValue.edited = false;
SettingValue.characters = 3;
SettingValue.selectedCharacters = false;


function Settings() {
    $("#dialog").dialog({
        width: 512
    });
    $("#btnDay").click(function (event) {
        event.preventDefault();
        $("#btnDay").addClass("selected");
        $("#btnSunset").removeClass("selected");
        $("#btnNight").removeClass("selected");
    });
    $("#btnSunset").click(function (event) {
        event.preventDefault();
        $("#btnSunset").addClass("selected");
        $("#btnNight").removeClass("selected");
        $("#btnDay").removeClass("selected");
    });
    $("#btnNight").click(function (event) {
        event.preventDefault();
        $("#btnNight").addClass("selected");
        $("#btnSunset").removeClass("selected");
        $("#btnDay").removeClass("selected");
    });

    var handle = $("#custom-handle");
    $("#slider").slider({
        max: 12.0,
        min: 0.0,
        step: 0.1,
        create: function () {
            handle.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle.text(ui.value);
        }
    });

    $("#btnRooftop").click(function (event) {
        event.preventDefault();
        $("#btnRooftop").addClass("selected");
        $("#btnStreet").removeClass("selected");
        $("#btnWindow").removeClass("selected");
    });
    $("#btnStreet").click(function (event) {
        event.preventDefault();
        $("#btnStreet").addClass("selected");
        $("#btnRooftop").removeClass("selected");
        $("#btnWindow").removeClass("selected");
    });
    $("#btnWindow").click(function (event) {
        event.preventDefault();
        $("#btnWindow").addClass("selected");
        $("#btnRooftop").removeClass("selected");
        $("#btnStreet").removeClass("selected");
    });


    //SettingValue 
    $("#slider").slider("value", - SettingValue.gravity.y);
    handle.text($("#slider").slider("value"));


    switch (SettingValue.daytime) {
        case 0:
            $("#btnDay").addClass("selected");
            break;
        case 1:
            $("#btnSunset").addClass("selected");
            break;
        case 2:
            $("#btnNight").addClass("selected");
    }


    switch (SettingValue.placement) {
        case 0:
            $("#btnRooftop").addClass("selected");
            break;
        case 1:
            $("#btnStreet").addClass("selected");
            break;
        case 2:
            $("#btnWindow").addClass("selected");
    }
    return false;
}

function save_settings() {
    SettingValue.gravity = new BABYLON.Vector3(0, -$("#slider").slider("value"), 0);

    if ($("#btnRooftop").hasClass("selected"))
        SettingValue.placement = 0;
    if ($("#btnStreet").hasClass("selected"))
        SettingValue.placement = 1;
    if ($("#btnWindow").hasClass("selected"))
        SettingValue.placement = 2;

    if ($("#btnDay").hasClass("selected"))
        SettingValue.daytime = 0;
    if ($("#btnSunset").hasClass("selected"))
        SettingValue.daytime = 1;
    if ($("#btnNight").hasClass("selected"))
        SettingValue.daytime = 2;

    getLight();
    SettingValue.edited = true;
    $("#dialog").dialog("close");
}

function defaultValue() {
    SettingValue.gravity = new BABYLON.Vector3(0, -9.8, 0);
    SettingValue.daytime = 1;
    SettingValue.placement = 0; 

    $("#slider").slider("value", - SettingValue.gravity.y);
    $("#custom-handle").text($("#slider").slider("value"));

    switch (SettingValue.daytime) {
        case 0:
            $("#btnDay").addClass("selected");
            $("#btnSunset").removeClass("selected");
            $("#btnNight").removeClass("selected");
            break;
        case 1:
            $("#btnSunset").addClass("selected");
            $("#btnNight").removeClass("selected");
            $("#btnDay").removeClass("selected");
            break;
        case 2:
            $("#btnNight").addClass("selected");
            $("#btnSunset").removeClass("selected");
            $("#btnDay").removeClass("selected");
    }


    switch (SettingValue.placement) {
        case 0:
            $("#btnRooftop").addClass("selected");
            $("#btnStreet").removeClass("selected");
            $("#btnWindow").removeClass("selected");
            break;
        case 1:
            $("#btnStreet").addClass("selected");
            $("#btnRooftop").removeClass("selected");
            $("#btnWindow").removeClass("selected");
            break;
        case 2:
            $("#btnWindow").addClass("selected");
            $("#btnRooftop").removeClass("selected");
            $("#btnStreet").removeClass("selected");
    }
}

function cancel() {
    $("#dialog").dialog("close");
}

//active camera
function cameraActivation() {
    var camera;
    switch (SettingValue.placement) {
        case 0:
            camera = new BABYLON.FreeCamera("Camera1", new BABYLON.Vector3(20, 23, -89), scene);
            camera.keysDown = camera.keysLeft = camera.keysRight = camera.keysUp = [];
            camera.setTarget(new BABYLON.Vector3(86, 3.5, -64));
            camera.attachControl(canvas, true);
            return camera;
        case 1:
            camera = new BABYLON.FreeCamera("Camera3", new BABYLON.Vector3(29, 5, -59), scene);
            camera.keysDown = camera.keysLeft = camera.keysRight = camera.keysUp = [];
            camera.setTarget(new BABYLON.Vector3(86, 3.5, -64));
            camera.attachControl(canvas, true);
            return camera;
        case 2: 
            camera = new BABYLON.FreeCamera("Camera2", new BABYLON.Vector3(84, 12, -55), scene);
            camera.keysDown = camera.keysLeft = camera.keysRight = camera.keysUp = [];
            camera.setTarget(new BABYLON.Vector3(86, 3.5, -64));
            camera.attachControl(canvas, true);
            return camera;
    }
}

var light = [];

//WORLD
function getLight() { 

    if (light.length === 0) {
        light.push(new BABYLON.PointLight("3", new BABYLON.Vector3(87, 10, -60), scene));
        light[0].diffuseColor = new BABYLON.Color3(1, 1, 0.654901);
        light[0].range = 25;

        light.push(new BABYLON.PointLight("0", new BABYLON.Vector3(47, 10, -60), scene));
        light[1].diffuseColor = new BABYLON.Color3(1, 1, 0.654901);
        light[1].range = 25;

        light.push(new BABYLON.PointLight("1", new BABYLON.Vector3(32, 10, -99), scene));
        light[2].diffuseColor = new BABYLON.Color3(1, 1, 0.654901);
        light[2].range = 25;

        light.push(new BABYLON.PointLight("2", new BABYLON.Vector3(86, 10, -99), scene));
        light[3].diffuseColor = new BABYLON.Color3(1, 1, 0.654901);
        light[3].range = 25;


        //sunset
        light.push(new BABYLON.PointLight("Omni", new BABYLON.Vector3(85, -85, 85), scene));
        light[4].ambientColor = new BABYLON.Color3(0.25, 0.25, 0.25);
        light[4].diffuseColor = new BABYLON.Color3(0.9882, 0.9764705, 0.8980);

        //day
        light.push(new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene));
        light[5].ambientColor = new BABYLON.Color3(0.271484375, 0.337890625, 0.390625);
        light[5].diffuseColor = new BABYLON.Color3(1, 1, 0.654901);
    }
    switch (SettingValue.daytime) {
        case 0:  
            light[0].setEnabled(false);
            light[1].setEnabled(false);
            light[2].setEnabled(false);
            light[3].setEnabled(false);
            light[5].setEnabled(true);
            light[4].setEnabled(false); 
            return light;
        case 1:
            light[0].setEnabled(false);
            light[1].setEnabled(false);
            light[2].setEnabled(false);
            light[3].setEnabled(false);
            light[5].setEnabled(false);
            light[4].setEnabled(true);
            return light;
        case 2:
            light[0].setEnabled(true);
            light[1].setEnabled(true);
            light[2].setEnabled(true);
            light[3].setEnabled(true);
            light[4].setEnabled(false);
            light[5].setEnabled(false);
            return light;
    }
}

function getDaytimeTexture() { 
    switch (SettingValue.daytime) {
        case 0:
            return "skybox_day";
        case 1:
            return "skybox_sunset";
        case 2:
            return "skybox_night";
    }
}

function Start(newMeshes) {
    $("#starting").dialog({
        dialogClass : "no-close",
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

        if (SettingValue.characters === 5) {
            character5 = new Character(cloneArray(newMeshes, 5));
            character5.body.position = new BABYLON.Vector3(68, 3, -90);
            character5.body.rotate(new BABYLON.Vector3(0, 1, 0), Math.PI / 2);

            slideX = walk2(character5);
            animation2 = animation(character5);
        }
        if (SettingValue.characters === 4) {
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
    });
}
