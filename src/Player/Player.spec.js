import Player, { UserPlayer, ComputerPlayer } from './Player';
import expect from 'expect';

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player();
  });

  it('should have a score property', () => {
    expect(
      player.hasOwnProperty('score')
    ).toExist()
  });

  describe('score', () => {
    it('should be a number', () => {
      expect( player.score ).toBeA('number');
    });

    it('should be 0 by default', () => {
      expect(player.score).toBe(0);
    });
  });
});


describe('UserPlayer', () => {
  let user;
  beforeEach(() => {
    user = new UserPlayer();
  });

  it('should extends Player', () => {
      expect(
        user instanceof Player
      ).toBe(true);
  });
});

describe('ComputerPlayer', () => {
  let computer;
  beforeEach(() => {
    computer = new ComputerPlayer();
  });

  it('should extends Player', () => {
      expect(
        computer instanceof Player
      ).toBe(true);
  });
});
