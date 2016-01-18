import { UserPlayer, ComputerPlayer } from './Player/Player';
import Game from './Game/Game';
import _ from 'lodash';

const upperMessage = document.querySelector('.upper-message');
const mainContainer = document.querySelector('.main-container');
const user = new UserPlayer();
const computer = new ComputerPlayer();
let game = new Game();


document.querySelector('.buttons').addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    const choise = e.target.getAttribute('data-game');
    suspance(function() {
      playRound(choise);
    })
  }
});

document.querySelector('.bazinga').addEventListener('click', e => {
  initBonusMode();
});

function initBonusMode() {
  game = new Game(true);
  document.querySelector('.main-container').classList.add('is-bonus');
}


function playRound(symbol) {
  const winner = game.play({
    player: user,
    symbol: symbol
  },
  {
    player: computer,
    symbol: game.getRandomSymbol()
  });

  if (winner) {
    winner.increaseScore();
    upperMessage.innerHTML = `
      ${winner.name} ha vinto, ora ha ${winner.getScore()} punti
    `;
    console.log(winner.name, 'won');
    console.log(`${winner.name}'s score is now ${winner.getScore()}`);
  } else {
    upperMessage.innerHTML = 'Pareggio!'
    console.log("it's a tie");
  }
}

function suspance(callback) {

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
