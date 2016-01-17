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
    it('should contain 3 objects if bonusModeEnabled is false', () => {
      expect(
      );
    });
  });
});
