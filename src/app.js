// import Player, {  UserPlayer, ComputerPlayer } from './Player/Player';
// const uno = new Player();
// uno.say();
// const due = new UserPlayer();
// due.say();
// const tre = new ComputerPlayer();
// tre.say();


import Game from './Game/Game';
const game = new Game(true);
game.getRandomSymbol();
