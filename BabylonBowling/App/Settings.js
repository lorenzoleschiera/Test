function SettingValue() { // constructor function
    
}
SettingValue.gravity = new BABYLON.Vector3(0, -9.8, 0);  // Private variable 
SettingValue.daytime = 1;
SettingValue.placement = 0;
SettingValue.edited = false;


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

    SettingValue.edited = true;
    $("#dialog").dialog("close");
}

function defaultValue() {
    SettingValue.gravity = new BABYLON.Vector3(0, -9.8, 0);  // Private variable 
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
            camera.setTarget(new BABYLON.Vector3(86, 3.5, -64));
            camera.attachControl(canvas, true);
            return camera;
        case 1:
            camera = new BABYLON.FreeCamera("Camera3", new BABYLON.Vector3(29, 5, -59), scene);
            camera.setTarget(new BABYLON.Vector3(86, 3.5, -64));
            camera.attachControl(canvas, true);
            return camera;
        case 2:
            //Adding an Arc Rotate Camera2
            camera = new BABYLON.FreeCamera("Camera2", new BABYLON.Vector3(84, 12, -55), scene);
            camera.setTarget(new BABYLON.Vector3(86, 3.5, -64));
            camera.attachControl(canvas, true);
            return camera;

    }


}




//WORLD
function getLight() {
    var light;
    switch (SettingValue.daytime) {
        case 0:  
            light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(5, -5, 5), scene);
            light.ambientColor = new BABYLON.Color3(0.25, 0.25, 0.25);
            light.diffuseColor = new BABYLON.Color3(0.9882, 0.9764705, 0.8980);
            return light;
        case 1:
            light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(5, -5, 0.6186), scene);
            light.ambientColor = new BABYLON.Color3(0.271484375, 0.337890625, 0.390625);
            light.diffuseColor = new BABYLON.Color3(1, 1, 0.654901);
            return light;
        case 2:
            light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(5, -5, 0.6186), scene);
            light.ambientColor = new BABYLON.Color3(0.271484375, 0.337890625, 0.390625);
            light.diffuseColor = new BABYLON.Color3(1, 1, 0.654901);
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