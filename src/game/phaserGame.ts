// src/game/PhaserGame.ts
import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene';

export function initializePhaserGame(): Phaser.Game {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'game-container',
    physics: {
      default: 'matter',
      matter: {
        gravity: { x: 0, y: 0.5 },
        debug: false,
      },
    },
    scene: [MainScene],
  };

  return new Phaser.Game(config);
}
