const jupiMoon = document.getElementById('jupiMoon');
const startButton = document.getElementById('start-game');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const gameContainer = document.getElementById('game-container');

let score = 0;
let timeLeft = 30;
let timer;
let gameInterval;

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    startButton.disabled = true;

    jupiMoon.style.display = 'block';

    gameInterval = setInterval(moveJupiMoon, 1000);

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function moveJupiMoon() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const moonWidth = jupiMoon.offsetWidth;
    const moonHeight = jupiMoon.offsetHeight;

    const x = Math.random() * (containerWidth - moonWidth);
    const y = Math.random() * (containerHeight - moonHeight);

    jupiMoon.style.left = `${x}px`;
    jupiMoon.style.top = `${y}px`;
}

jupiMoon.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveJupiMoon();
});

function endGame() {
    clearInterval(timer);
    clearInterval(gameInterval);
    jupiMoon.style.display = 'none';
    startButton.disabled = false;
    alert(`Game Over! Your score: ${score}`);
}

startButton.addEventListener('click', startGame);
