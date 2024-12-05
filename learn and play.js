
// Language Selector
const languageSelector = document.getElementById('languageSelector'); languageSelector.addEventListener('change', (e) => {
alert(`Language switched to: ${e.target.value}`);
});

// Start Game Button
const startGameBtn = document.getElementById('startGame'); const gameArea = document.getElementById('gameArea');

startGameBtn.addEventListener('click', () =>
{ gameArea.style.display = 'block'; alert('Game Started! Let’s learn and play!');
});

// Answer Buttons
const answers = document.querySelectorAll('.answer'); answers.forEach((button) => {
button.addEventListener('click', (e) => {
const isCorrect = e.target.getAttribute('data-correct') === 'true'; if (isCorrect) {
alert('Correct! Great job!');
} else {
alert('Oops! Try again.');
}
});
});
