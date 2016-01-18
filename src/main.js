import { UserPlayer, ComputerPlayer } from './Player/Player';
import Game from './Game/Game';
import _ from 'lodash';

const upperMessage = document.querySelector('.upper-message');
const mainContainer = document.querySelector('.main-container');
const videoSection = document.querySelector('.video-section');
const computer = new ComputerPlayer();
let game = new Game();
let user;


document.querySelector('.buttons').addEventListener('click', e => {
  if (!user) {
    const name = prompt("Prima partita, Inserire il proprio nome");
    user = new UserPlayer(name)
  }
  if (e.target.nodeName === 'BUTTON') {
    const choise = e.target.getAttribute('data-game');
    suspanceCountDown(function() {
      playRound(choise);
    })
  }
});

document.querySelector('.bazinga').addEventListener('click', e => {
  initBonusMode();
});

document.querySelector('.wtf').addEventListener('click', e => {
  if (videoSection.className.indexOf('is-hidden') !== -1) {
    videoSection.classList.remove('is-hidden');
    window.scrollTo(0, window.innerHeight);
  } else {
    videoSection.classList.add('is-hidden');
  }
});

function initBonusMode() {
  game = new Game(true);
  document.querySelector('.main-container').classList.add('is-bonus');
}


function playRound(symbol) {
  const computerChoise = game.getRandomSymbol();
  const winner = game.play({
    player: user,
    symbol: symbol
  },
  {
    player: computer,
    symbol: computerChoise
  });

  if (winner) {
    winner.increaseScore();
    upperMessage.innerHTML = `
      ${symbol} vs ${computerChoise} <br>
      ${winner.name} ha vinto, ora ha ${winner.getScore()} punti!
    `;
    console.log(winner.name, 'won');
    console.log(`${winner.name}'s score is now ${winner.getScore()}`);
  } else {
    upperMessage.innerHTML = 'Pareggio!'
    console.log("it's a tie");
  }
}

function suspanceCountDown(callback) {

  var countDown = 3
  mainContainer.classList.add('suspance');
  upperMessage.innerHTML = countDown;
  const countdownTimer = setInterval(function() {
      upperMessage.innerHTML =
      countDown = countDown - 1;
      if (countDown <= 0) {
          clearInterval(countdownTimer);
          mainContainer.classList.remove('suspance');
          callback();
      }
  }, 1000);
}
