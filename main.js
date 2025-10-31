let mainButt = document.getElementById("mainButt");
let textClick = document.getElementById("numOfClicks");
let firstUpdate = document.getElementById("firstUpdate");
let secondUpdate = document.getElementById("secondUpdate");

let numOfClicks = 0;
let firstStage = false;
let secondStage = false;

mainButt.onclick = function() {
    numOfClicks++;
    textClick.textContent = "Button clicked " + numOfClicks + " times";
    
    if (numOfClicks === 30) {
        firstUpdate.style.visibility = "visible";
    }else if (numOfClicks === 50) {
        secondUpdate.style.visibility = "visible";
    }

    if (firstStage === true) {
    numOfClicks++;
    }else if(secondStage === true) {
    numOfClicks += 2;
    }



}

firstUpdate.onclick = function() {
    if (numOfClicks >= 30) {
        firstStage = true;
        numOfClicks = numOfClicks - 30;
        document.body.style.backgroundImage = "url('img/background.png')";
        firstUpdate.style.visibility = "hidden";
    }}

secondUpdate.onclick = function() {
    if (numOfClicks >= 50) {
        secondStage = true;
        numOfClicks = numOfClicks - 50;
        document.body.style.backgroundImage = "url('img/ghostbg.png')";
        secondUpdate.style.visibility = "hidden";
    }
}