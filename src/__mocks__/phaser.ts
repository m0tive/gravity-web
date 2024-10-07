
const Phaser = {
  Game: jest.fn().mockImplementation(() => ({
    destroy: jest.fn(),
  })),
  // Add other Phaser classes or methods as needed
};

export default Phaser;
