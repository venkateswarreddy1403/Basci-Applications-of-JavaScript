let colorPicker = document.getElementById("colorPicker");
let selectHexcode = document.getElementById("display-hexcode");

function changeBgToGrey() {
    colorPicker.style.backgroundColor = "#e0e0e0";
    selectHexcode.textContent = "e0e0e0";
}

function changeBgToGreen() {
    colorPicker.style.backgroundColor = "#6fcf97";
    selectHexcode.textContent = "6fcf97";
}

function changeBgToBlue() {
    colorPicker.style.backgroundColor = "#56ccf2";
    selectHexcode.textContent = "56ccf2";
}

function changeBgToPink() {
    colorPicker.style.backgroundColor = "#bb6bd9";
    selectHexcode.textContent = "bb6bd9";
}

