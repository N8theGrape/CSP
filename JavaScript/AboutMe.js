var group1 = document.getElementById("imageGroup1");
var group2 = document.getElementById("imageGroup2");
var button = document.getElementById("changeImagesButton");
var currentGroup = 1;
var authorized = false;

var keyboardString = "";
var keyboardPassword = ["Camden", "Bradshaw","Luca"];

function updateGroups() {
    if (currentGroup === 1) {
        group1.style.display = "flex";
        group2.style.display = "none";
    }
    if (currentGroup === 2) {
        group1.style.display = "none";
        group2.style.display = "flex";
    }
    if (!authorized) {
        currentGroup = 1;
        group1.style.display = "flex";
        group2.style.display = "none";
        button.style.display = "none";
    }
    else {
        button.style.display = "flex";
    }
}

function changeImages () {
    if (currentGroup === 1) {
        currentGroup = 2;
    }
    else {
        currentGroup = 1;
    }
    updateGroups();
}

function includesPassword(keyboardString) {
    for(var index = 0; index< keyboardPassword.length; index++) {
        if(keyboardString.toLowerCase().includes(keyboardPassword[index].toLowerCase())) {
            return true;
        }
    }
    return false;
}

document.addEventListener('keydown', function(e) {
    updateGroups();
    if (e.keyCode === 8) {
        keyboardString = keyboardString.substring(0,keyboardString.length - 1);
    }
    else  if (e.keyCode === 13) {
        if ( includesPassword(keyboardString)){
            authorized = true;
        }
        else {
            authorized = false;
        }
    }
    else if (e.key.length === 1) {
        keyboardString += e.key;
    }
});


updateGroups();