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
      if (bonusModeEnabled) {
        this.initBonusMode();
      }
  }
  play(playerChoise, enemyChoise) {

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
}
