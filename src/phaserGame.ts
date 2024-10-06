import Phaser from 'phaser';

export function initializePhaserGame() {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
    physics: {
      default: 'matter',
      matter: {
        gravity: { y: 0.5 },
      },
    },
  });
}

function preload(this: Phaser.Scene) {
  // Load assets if needed
}

function create(this: Phaser.Scene) {
  // Example: Adding a static ground using Matter.js
  const ground = this.matter.add.rectangle(400, 580, 800, 40, { isStatic: true });
  this.add.rectangle(400, 580, 800, 40, 0x8b4513); // Visual ground
}

function update(this: Phaser.Scene, time: number, delta: number) {
  // Update game logic here
}
