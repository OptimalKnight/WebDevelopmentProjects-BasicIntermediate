const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#winScore');

let winningScore = 3;
let isOver = false;

function updateScores(player, opponent) {
    if (!isOver) {
        player.score++;
        if (player.score === winningScore) {
            isOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}
function reset(player) {
    isOver = false;
    player.score = 0;
    player.display.innerText = player.score;
    player.display.classList.remove('has-text-success', 'has-text-danger');
    player.button.disabled = false;
}
function resetAll(players) {
    for (let player of players) {
        reset(player);
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})
p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})

winScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetAll([p1, p2]);
})
resetButton.addEventListener('click', function () {
    resetAll([p1, p2]);
})
