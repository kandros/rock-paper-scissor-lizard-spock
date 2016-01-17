export default class Game {

  rules = [
    {
      name: 'rock',
      winAgainst: [ 'scissor', 'lizard' ]
    },
    {
      name: 'paper',
      winAgainst: [ 'rock', 'spock' ]
    },
    {
      name: 'scissor',
      winAgainst: [ 'paper', 'lizard' ]
    },
  ];

  constructor(bonusModeEnabled = false) {
      this.bonusModeEnabled = bonusModeEnabled;
      if (bonusModeEnabled) {
        // this.initBonusMode();
      }
  }
  play(playerChoise, enemyChoise) {

  }
  initBonusMode() {
    this.rules.rock.winAgainst.push('lizard');
    this.rules.paper.winAgainst.push('spock');
    this.rules.scissor.winAgainst.push('lizard');
    this.rules.lizard.winAgainst = ['spock', 'paper'];
    this.rules.spock.winAgainst = ['scissor', 'rock']
  }
}
