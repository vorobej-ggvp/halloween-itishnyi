const ghost = document.querySelector('.bg-image');
const mainButt = document.getElementById("mainButt");
const textClick = document.getElementById("numOfClicks");
const firstUpdate = document.getElementById("first-update");
const secondUpdate = document.getElementById("second-update");
const thirdUpdate = document.getElementById("third-update");
const fourthUpdate = document.getElementById("fourth-update");

const SIZE = 300;
const STEP = 10;
const INTERVAL = 25;
const goldForFirst = 5;
const goldForSecond = 10;
const goldForThird = 30;
const goldForFourth = 50;
let numOfClicks = 0;
let x = 10;
let y = 10;
let stepX = STEP;
let stepY = STEP;
let animationStarted = false;

const onInterval = () => {
    x += stepX;
    y += stepY;
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
    if(y > window.innerHeight - SIZE || y <= 0)
        stepY = -stepY;
    if(x > window.innerWidth - SIZE || x <= 0)
        stepX = -stepX;
}

mainButt.onclick = function() {
    numOfClicks++;
    textClick.textContent = "Got " + numOfClicks + " coins";
    
    switch(numOfClicks) {
        case goldForFirst:
            firstUpdate.style.visibility = "visible";    
            break;
        case goldForSecond:
            secondUpdate.style.visibility = "visible";
            break;
        case goldForThird:
            thirdUpdate.style.visibility = "visible";
            break;
        case goldForFourth:
            fourthUpdate.style.visibility = "visible";
            break;
        default:
            break;
    }
}

firstUpdate.onclick = function() {
    if(numOfClicks >= goldForFirst) {
        numOfClicks -= goldForFirst;
        document.title = "Halloween Clicker";
        firstUpdate.style.visibility = "hidden";
    }
}

secondUpdate.onclick = function() {
    if(numOfClicks >= goldForSecond) {
        numOfClicks -= goldForSecond;
        document.body.style.backgroundColor = "hsla(37 100% 48.8% / 0.81)";
        secondUpdate.style.visibility = "hidden";
    }
}

thirdUpdate.onclick = function() {
    if (numOfClicks >= goldForThird) {
        numOfClicks = numOfClicks - goldForThird;
        document.body.style.backgroundImage = "url('img/background.png')";
        thirdUpdate.style.visibility = "hidden";
    }}

fourthUpdate.onclick = function() {
    if (numOfClicks >= goldForFourth) {
        numOfClicks = numOfClicks - goldForFourth;
        ghost.style.visibility = "visible";
        if(!animationStarted) {
            setInterval(onInterval, INTERVAL);
            animationStarted = true;
        }
        fourthUpdate.style.visibility = "hidden";
    }
}