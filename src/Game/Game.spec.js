import Game from './Game';
import expect from 'expect';

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should have a bonusModeEnabled property', () => {
    expect(
      game.hasOwnProperty('bonusModeEnabled')
    ).toBe(true)
  });

  describe('bonusModeEnabled', () => {
    it('should be false by default', () => {
      expect(
        game.bonusModeEnabled
      ).toBe(false);
    });

    it('value should be set in the constructor', () => {
      const bonusGame = new Game(true);
      expect(
        bonusGame.bonusModeEnabled
      ).toBe(true);
    });
  });

  it('should have a rules property', () => {
      expect(
        game.hasOwnProperty('rules')
      ).toExist();
  });

  describe('rules', () => {
    it('should be an Array', () => {
        expect(
          game.rules.constructor
        ).toEqual(Array);
    });

    it('should contain 3 objects if bonusModeEnabled is false', () => {
      expect(
        game.rules.length
      ).toBe(3);
    });

    it('should not contain lizard if bonusModeEnabled is false', () => {
      expect(
        game.rules.some(symbol => symbol.name === 'lizard')
      ).toBe(false);
    });

    it('should not contain spock if bonusModeEnabled is false', () => {
      expect(
        game.rules.some(symbol => symbol.name === 'spock')
      ).toBe(false);
    });

    it('should contain 5 objects if bonusModeEnabled is true', () => {
      const bonusGame = new Game(true);
      expect(
        bonusGame.rules.length
      ).toBe(5)
    });

    it('should contain lizard if bonusModeEnabled is true', () => {
      const bonusGame = new Game(true);
      expect(
        bonusGame.rules.some(symbol => symbol.name === 'lizard' )
      ).toBe(true);
    });

    it('should contain spock if bonusModeEnabled is true', () => {
      const bonusGame = new Game(true);
      expect(
        bonusGame.rules.some(symbol => symbol.name === 'spock' )
      ).toBe(true);
    });

    // win agains lenght should be 2 if bonus disable
    // win agains lenght should be 3 if bonus enabled
  });


  describe('symbol', () => {
    it('should win agains one other symbols if bonusModeEnabled is false', () => {
      game.rules.every(symbol => console.log('test' + symbol.name + ' ' + symbol.winAgainst));
      expect(
        game.rules.every(symbol => symbol.winAgainst.length === 1)
      ).toBe(true);
    });

    it('should win agains two other symbols if bonusModeEnabled is true', () => {
      const bonusGame = new Game(true);
      expect(
        bonusGame.rules.every(symbol => symbol.winAgainst.length === 2)
      ).toBe(true);
    });
  });
});
