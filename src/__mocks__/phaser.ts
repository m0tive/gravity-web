
const Phaser = jest.createMockFromModule('phaser') as jest.Mocked<typeof import('phaser')>;

// Add custom mock implementations if needed
Phaser.Game = jest.fn().mockImplementation(() => ({
  destroy: jest.fn(),
}));

export default Phaser;
