import { UserPlayer, ComputerPlayer } from './Player/Player';
import Game from './Game/Game';
import _ from 'lodash';

const game = new Game();
const user = new UserPlayer();
const computer = new ComputerPlayer();


document.querySelector('.buttons').addEventListener('click', function(e) {
  if (e.target.nodeName === 'BUTTON') {
    const choise = e.target.getAttribute('data-game');
    playRound(choise);
  }
});

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
    console.log(winner.name, 'won');
    console.log(`${winner.name}'s score is now ${winner.getScore()}`);
  } else {
    console.log("it's a tie");
  }
}
