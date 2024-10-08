import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

export function initializePhaserGame() {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    scene: [MainScene],
    physics: {
      default: 'matter',
      matter: {
        gravity: { x: 0, y: 0.5 },
      },
    },
  });
}
