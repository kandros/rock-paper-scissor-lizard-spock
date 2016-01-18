import _ from 'lodash';
import Game from '../Game/Game';

export default class Player {
	score = 0;

	constructor() {
	}

	sayScore() {
		console.log('Your score is now', this.score);
	}

	getScore() {
		return this.score;
	}

	increaseScore() {
		this.score = this.score + 1;
	}

}

export class UserPlayer extends Player {
	constructor(name = user){
		super();
		this.name = name;
	}
}

export class ComputerPlayer extends Player {
	name = 'computer';
}
