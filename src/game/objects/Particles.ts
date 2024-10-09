// src/game/objects/Particles.ts
import Phaser from 'phaser';

export class ThrusterParticles {
  private emitter: Phaser.GameObjects.Particles.ParticleEmitter;
  //private ship: Phaser.Physics.Matter.Image;

  constructor(scene: Phaser.Scene, _ship: Phaser.Physics.Matter.Image) {
    // Create a tiny circle using graphics and use it as a particle
    const graphics = scene.add.graphics();
    graphics.fillStyle(0xFF4500);
    graphics.fillCircle(5, 5, 5);

    // Generate texture from graphics
    graphics.generateTexture('thrusterParticle', 10, 10);
    graphics.destroy();

    const particles = scene.add.particles('thrusterParticle');
    this.emitter = particles.createEmitter({
      speed: { min: 50, max: 100 },
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD',
      lifespan: 300,
      on: false,
    });
  }

  public update(ship: Phaser.Physics.Matter.Image) {
    const angle = ship.rotation - Math.PI / 2;
    const shipBaseX = ship.x - Math.cos(angle) * 30;
    const shipBaseY = ship.y - Math.sin(angle) * 30;

    this.emitter.setPosition(shipBaseX, shipBaseY);
    this.emitter.setAngle({ min: angle * Phaser.Math.RAD_TO_DEG - 10, max: angle * Phaser.Math.RAD_TO_DEG + 10 });
    this.emitter.on = true;
  }

  public stop() {
    this.emitter.on = false;
  }
}
