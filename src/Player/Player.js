import _ from 'lodash';
import Game from '../Game/Game';

export default class Player {
	score = 0;

	constructor() {
	}

	say() {
		console.log(this.score);
	}

	logResult() {
		console.log('Your score is now', this.score);
	}

	increaseScore() {
		this.score = this.score + 1;
	}

}

export class UserPlayer extends Player {
	constructor(){
		super();
	}
	say() {
		console.log('this is my fucking score ', this.score);
	}
	play(playerChoise, enemyChoise ) {
		const game = new Game(symbol);
		game.play(playerChoise, enemyChoise);
	}
}

export class ComputerPlayer extends Player {
	constructor(){
		super();
	}

	randomChoise() {

	}
}
