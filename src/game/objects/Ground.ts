// src/game/objects/Ground.ts
import Phaser from 'phaser';

export class Ground {
  constructor(scene: Phaser.Scene) {
    const graphics = scene.add.graphics();
    graphics.fillStyle(0x8B4513);
    graphics.fillRect(0, 580, 800, 20);

    // Add noise or rocks
    for (let i = 0; i < 800; i += 10) {
      for (let j = 580; j < 600; j += 10) {
        if (Math.random() > 0.8) {
          graphics.fillStyle(0x5C4033);
          graphics.fillRect(i, j, 8, 8);
        }
      }
    }

    graphics.generateTexture('groundTexture', 800, 20);
    scene.matter.add.image(400, 590, 'groundTexture', null, { isStatic: true });
  }
}
