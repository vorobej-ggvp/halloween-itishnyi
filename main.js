let mainButt = document.getElementById("mainButt");
let textClick = document.getElementById("numOfClicks");
let firstUpdate = document.getElementById("firstUpdate");

let numOfClicks = 0;

mainButt.onclick = function() {
    numOfClicks++;
    textClick.textContent = "Button clicked " + numOfClicks + " times";
    
    if (numOfClicks === 30) {
        console.log("X");
        firstUpdate.style.visibility = "visible";
    }
}

firstUpdate.onclick = function() {
    if (numOfClicks >= 30) {
        document.body.style.backgroundImage = "url('img/background.jpg')";
    }}
