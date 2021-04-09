// get html elements from DOM
const bowls = document.querySelectorAll('.bowls');
const avocados = document.querySelectorAll('.avocado');
const scoreBoard = document.querySelectorAll('.score');
let lastBowl;

//avocados pop up for a random time
function randomTime(min, max){
    return Math.round(Math.random()* (max - min) + min);
}

// avocadoes pop out of a random bowl (1 to 6)
function randomBowl (bowls){
    const index = Math.floor(Math.random()* bowls.length);
    const bowl = bowls[index];
    if (bowl === lastBowl){
        return randomBowl(bowls);
    }
    lastBowl = bowl;
    return bowl;
}
