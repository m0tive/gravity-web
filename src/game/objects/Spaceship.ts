// src/game/objects/Spaceship.ts
import Phaser from 'phaser';

export class Spaceship {
  private ship: Phaser.Physics.Matter.Image;
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.ship = scene.matter.add.polygon(400, 300, 3, 30, {
      restitution: 0.5,
      friction: 0.02,
      frictionAir: 0.05,
    });
    this.ship.body.setMass(10); // Heavier ship for more realistic movement
  }

  public getShip() {
    return this.ship;
  }

  public accelerate(speed: number) {
    const angle = this.ship.rotation - Math.PI / 2;
    const forceX = Math.cos(angle) * speed;
    const forceY = Math.sin(angle) * speed;
    this.ship.applyForce({ x: forceX, y: forceY });
  }

  public rotate(dragDistance: number, rotationSpeed: number) {
    this.ship.setAngularVelocity(dragDistance > 0 ? rotationSpeed : -rotationSpeed);
  }
}
