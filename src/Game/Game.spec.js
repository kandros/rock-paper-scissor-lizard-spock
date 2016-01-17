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
          game.rules
        ).toBeAn('array');
    });

    it('should be equal to an expected array when bonusModeEnabled is false', () => {
        const actual = game.rules;
        const expected = [
          { name: 'rock', winAgainst: ['scissor'] },
          { name: 'paper', winAgainst: ['rock'] },
          { name: 'scissor', winAgainst: ['paper'] }
        ];
        expect(actual).toEqual(expected);
    });

    it('should be equal to an expected array when bonusModeEnabled is disabled', () => {
        const bonusGame = new Game(true);
        const actual = bonusGame.rules;
        const expected = [
          { name: 'rock', winAgainst: ['scissor', 'lizard'] },
          { name: 'paper', winAgainst: ['rock', 'spock'] },
          { name: 'scissor', winAgainst: ['paper', 'lizard'] },
          { name: 'lizard', winAgainst: ['spock', 'paper'] },
          { name: 'spock', winAgainst: ['scissor', 'rock'] },
        ];
        expect(actual).toEqual(expected);
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

    describe('symbol', () => {
      it('should win against one other symbols if bonusModeEnabled is false', () => {
        expect(
          game.rules.every(symbol => symbol.winAgainst.length === 1)
        ).toBe(true);
      });

      it('should win against two other symbols if bonusModeEnabled is true', () => {
        const bonusGame = new Game(true);
        expect(
          bonusGame.rules.every(symbol => symbol.winAgainst.length === 2)
        ).toBe(true);
      });
    });

  });



});
