// get html elements from DOM
const bowls = document.querySelectorAll('.bowl');
const avocados = document.querySelectorAll('.avocado');
const scoreBoard = document.querySelectorAll('.score');
let timeOver = false;
let lastBowl;

//avocados jump up for a random time
function randomTime(min, max){
    return Math.round(Math.random()* (max - min) + min);
}

// avocados jump out of a random bowl (1 to 6)
function randomBowl(bowls){
    const index = Math.floor(Math.random()* bowls.length);
    const bowl = bowls[index];
    if (bowl === lastBowl){
        return randomBowl(bowls);
    }
    lastBowl = bowl;
    return bowl;
}

// which avocado will jump up and how long for
function jump() {
    const time = randomTime(200, 1000);
    const bowl = randomBowl(bowls);
    bowl.classList.add("show");
    console.log(bowl)
    setTimeout(() => {
        bowl.classList.remove("show");
        if (!timeOver) jump();
    }, time)
}

// start the game
function startGame() {
    scoreBoard.textContent = 0;
    timeOver = false
    jump()
    setTimeout(() => timeOver = true, 10000)
}

