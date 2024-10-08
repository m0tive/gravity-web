import Phaser from 'phaser';
import { createGroundTexture } from '../textures/GroundTexture';
import { createThrusterParticle } from '../textures/ThrusterParticle';
import { PlayerShip } from '../objects/PlayerShip';

export default class MainScene extends Phaser.Scene {
  private player!: PlayerShip;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
  // Create procedural ground texture
  const groundTexture = this.textures.createCanvas('ground', 800, 40);

  // Check if groundTexture is not null before using it
  if (groundTexture) {
    createGroundTexture(groundTexture);

    // Add ground to the scene
    this.add.image(400, 580, 'ground');
    this.matter.add.rectangle(400, 580, 800, 40, { isStatic: true });
  } else {
    console.error('Failed to create ground texture.');
  }

  // Initialize player ship
  this.player = new PlayerShip(this, 400, 300);

  // Add thruster particle effect
  createThrusterParticle(this);
}

  update(time: number, delta: number) {
    this.player.update(time, delta);
  }
}
