'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let number_field = document.querySelector('.number');
  let message = document.querySelector('.message');
  let score = document.querySelector('.score');
  let highscore = document.querySelector('.highscore');

  if (!guess) {
    message.textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    number_field.textContent = secretNumber;
    if (score.textContent > highscore.textContent)
      highscore.textContent = score.textContent;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').ariaDisabled = true;
  } else {
    if (score.textContent > 0) score.textContent--;
    if (score.textContent == 0) {
      message.textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = '#d03f3f';
      number_field.textContent = secretNumber;
    } else if (guess > secretNumber) message.textContent = '📈 Too High';
    else if (guess < secretNumber) message.textContent = '📉 Too Low';
  }

  // if (!guess) {
  //   message.textContent = '⛔ No Number!';
  // } else if (guess > secretNumber) {
  //   if (Number(score.textContent) > 1) {
  //     message.textContent = '📈 Too High';
  //     score.textContent--;
  //   } else {
  //     message.textContent = '💥 You lost the game!';
  //     score.textContent = '0';
  //     document.querySelector('body').style.backgroundColor = '#d03f3f';
  //     number_field.textContent = secretNumber;
  //   }
  // } else if (guess < secretNumber) {
  //   if (Number(score.textContent) > 1) {
  //     message.textContent = '📉 Too Low';
  //     score.textContent--;
  //   } else {
  //     message.textContent = '💥 You lost the game!';
  //     score.textContent = '0';
  //     document.querySelector('body').style.backgroundColor = '#d03f3f';
  //     number_field.textContent = secretNumber;
  //   }
  // } else {
  //   message.textContent = '🎉 Correct Number!';
  //   number_field.textContent = secretNumber;
  //   if (score.textContent > highscore.textContent)
  //     highscore.textContent = score.textContent;
  //   document.querySelector('body').style.backgroundColor = '#60b347';
  //   document.querySelector('.number').style.width = '30rem';
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20);
});
