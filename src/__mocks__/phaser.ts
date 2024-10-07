
const Phaser = jest.createMockFromModule('phaser');

// Add custom mock implementations if needed
Phaser.Game = jest.fn().mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn(),
}));

export default Phaser;
