// get html elements from DOM
const bowls = document.querySelectorAll('.bowl');
const avocados = document.querySelectorAll('.avocado');
const scoreBoard = document.querySelector('.score');
let timeOver = false;
let lastBowl;
let score = 0;

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

    bowl.classList.add('show');

    setTimeout(() => {
        bowl.classList.remove('show');
        if (!timeOver) jump();
    }, time)
}

// start the game
function startGame() {

    scoreBoard.textContent = 0;
    timeOver = false;
    score = 0;

    jump()

    setTimeout(() => timeOver = true, 10000)
}

// smash avocado and keep score
function smash(e){

    if(!e.isTrusted) return;

    score++;
    this.classList.remove('show');
    scoreBoard.textContent = score;
}

avocados.forEach(avocado => avocado.addEventListener('click', smash));