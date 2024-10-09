// src/game/scenes/MainScene.ts
import { Spaceship } from '../objects/Spaceship';
import { ThrusterParticles } from '../objects/Particles';
import { Ground } from '../objects/Ground';

export class MainScene extends Phaser.Scene {
  private spaceship: Spaceship;
  private particles: ThrusterParticles;
  private isAccelerating = false;
  private dragStartX: number | null = null;

  constructor() {
    super('MainScene');
  }

  preload() {}

  create() {
    // Procedural ground
    new Ground(this);

    // Spaceship and particles
    this.spaceship = new Spaceship(this);
    this.particles = new ThrusterParticles(this, this.spaceship.getShip());

    this.input.on('pointerdown', () => this.isAccelerating = true);
    this.input.on('pointerup', () => this.isAccelerating = false);
    this.input.on('pointermove', this.handleDrag.bind(this));
  }

  update() {
    if (this.isAccelerating) {
      this.spaceship.accelerate(0.05);
      this.particles.update(this.spaceship.getShip());
    } else {
      this.particles.stop();
    }
  }

  handleDrag(pointer: Phaser.Input.Pointer) {
    if (pointer.isDown) {
      if (this.dragStartX === null) this.dragStartX = pointer.x;
      const dragDistance = pointer.x - this.dragStartX;
      this.spaceship.rotate(dragDistance, 0.03);
      this.dragStartX = pointer.x;
    } else {
      this.dragStartX = null;
    }
  }
}
