
let headGirl = document.querySelector('.headGirl');
let gameContainer = document.querySelector('#gameContainer')
let clownHead = document.querySelector('.clownHead');
let buttons = document.querySelector("#buttons");
let randomX = Math.random() * (gameContainer.clientWidth - clownHead.clientWidth);
let randomY = Math.random() * (gameContainer.clientHeight - clownHead.clientHeight);
let containerScore = document.getElementById('containerScore');
let containerLevel = document.getElementById('containerLevel');
let containerTimer = document.getElementById('containerTimer');
let timeInterval = null

let score = 0

let timer = 30

let gameStarted = false;

function startTimer() {
    timeInterval = setInterval(() => {
        timer--
        if (timer <= 0 ) {
            clearInterval(timeInterval)
            headGirl.classList.add('cacher');
            containerScore.querySelector('p').textContent ="End of the game, score : " + score;
        }
        document.querySelector("#containerTimer").textContent = timer
    }, 1000);
}

function start() {
    gameStarted = true;
    startTimer()
    containerScore.classList.remove('cacher');
    buttons.classList.add('cacher');
    containerLevel.classList.add('cacher');
    containerTimer.classList.remove('cacher');
    setInterval(move, 1000);
}

function settings() {
    containerLevel.classList.remove('cacher');
    containerScore.classList.add('cacher');
    buttons.classList.add('cacher');
    containerTimer.classList.add('cacher');
    headGirl.classList.add('cacher');
}

function easy() {
    gameStarted = true;
    startTimer()
    containerScore.classList.remove('cacher');
    buttons.classList.add('cacher');
    containerLevel.classList.add('cacher');
    headGirl.classList.remove('cacher');
    containerTimer.classList.remove('cacher');
    setInterval(move, 1000);
}

// bitch wtf

function normal() {
    gameStarted = true;
    startTimer()
    containerScore.classList.remove('cacher');
    buttons.classList.add('cacher');
    containerLevel.classList.add('cacher');
    headGirl.classList.remove('cacher');
    containerTimer.classList.remove('cacher');
    setInterval(move, 700);
}

function difficult() {
    gameStarted = true;
    startTimer()
    containerScore.classList.remove('cacher');
    buttons.classList.add('cacher');
    containerLevel.classList.add('cacher');
    headGirl.classList.remove('cacher');
    containerTimer.classList.remove('cacher');
    setInterval(move, 500)
}

function quit() {
    window.close();

}

function afficherScore() {
    containerScore.querySelector('p').textContent ="Your score is : " + score;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function move() {
    console.log(gameContainer);


    randomX = random(0, gameContainer.clientWidth - clownHead.clientWidth);
    randomY = random(0, gameContainer.clientHeight - clownHead.clientHeight);
    headGirl.style.top = randomY + 'px';
    headGirl.style.left = randomX + 'px';

}


headGirl.addEventListener('click', function () {
    if (gameStarted) {
    score++;
    afficherScore();
    document.querySelector('#clown').classList.add('rotate');
    setTimeout(() => {
        document.querySelector('#clown').classList.remove('rotate');
    }, 500)
}

});


