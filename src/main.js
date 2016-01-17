// import $ from 'jQuery';
import { UserPlayer, ComputerPlayer } from './Player/Player';
import _ from 'lodash';

const rules = {
  rock: { winAgainst:
    [ 'scissor', 'lizard' ]
  },
  paper: { winAgainst:
    [ 'rock', 'spock' ]
  },
  scissor: { winAgainst:
    [ 'paper', 'lizard' ]
  },
};

const choises = [
  'rock',
  'paper',
  'scissor'
];

const player = new UserPlayer();
const computer = new ComputerPlayer();

// player.playAgains(computer.randomChose);



// $('button').click(function() {
//   const choise = $(this).data('game');
//   startGame(choise);
// })

document.querySelector('.buttons').addEventListener('click', function(e) {
  const choise = e.target.getAttribute('data-game');
  startGame(choise);
});

function startGame(choise) {
  const computerChoise = getComputerChoise();
  console.log('tu hai giocato', choise);
  if (choise === computerChoise) {
    console.log('Pareggio');
  } else if (_.includes(rules[choise].winAgainst, computerChoise)) {
    console.log('hai vinto');
  } else {
    console.log('hai perso');
  }
  console.log('\n');
}

function getComputerChoise() {
  const computerChoise = _.sample(choises);
  console.log('il computer gioca', computerChoise);
  return computerChoise;
}
