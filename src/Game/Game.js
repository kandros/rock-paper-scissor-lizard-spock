import _ from 'lodash';
export default class Game {

  rules = [
    {
      name: 'rock',
      winAgainst: ['scissor']
    },
    {
      name: 'paper',
      winAgainst: ['rock']
    },
    {
      name: 'scissor',
      winAgainst: ['paper']
    }
  ];

  constructor(bonusModeEnabled = false) {
      this.bonusModeEnabled = bonusModeEnabled;
      this.initBonusMode = this.initBonusMode.bind(this);
      this.getRandomSymbol = this.getRandomSymbol.bind(this);
      this.play = this.play.bind(this);
      if (bonusModeEnabled) {
        this.initBonusMode();
      }
  }

  initBonusMode() {
    _.find(this.rules, { name: 'rock' }).winAgainst.push('lizard');
    _.find(this.rules, { name: 'paper' }).winAgainst.push('spock');
    _.find(this.rules, { name: 'scissor' }).winAgainst.push('lizard');

    this.rules.push(
      {
        name: 'lizard',
        winAgainst: ['spock', 'paper']
      },
      {
        name: 'spock',
        winAgainst: ['scissor', 'rock']
      }
    );
  }

  getRandomSymbol() {
    return _.sample(this.rules).name;
  }

  play({ player: firstPlayer, symbol: firstSymbol }, { player: secondPlayer, symbol: secondSymbol }) {
    let winner;
    if (firstSymbol === secondSymbol) {
    } else if (_.find(this.rules, {name: firstSymbol}).winAgainst.includes(secondSymbol)) {
      return winner = firstPlayer,  winner;
    } else {
      return winner = secondPlayer,  winner;
    }
  }
}
