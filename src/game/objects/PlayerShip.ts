import Phaser from 'phaser';

export class PlayerShip {
  private sprite: Phaser.Physics.Matter.Image;
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.sprite = this.scene.matter.add.image(x, y, undefined);
    this.sprite.setFrictionAir(0.05);
  }

  update(_time: number, _delta: number) {
    const pointer = this.scene.input.activePointer;

    if (pointer.isDown) {
      this.sprite.thrust(0.05);
    }

    if (pointer.x < this.sprite.x) {
      this.sprite.setAngularVelocity(-0.05);
    } else if (pointer.x > this.sprite.x) {
      this.sprite.setAngularVelocity(0.05);
    }
  }
}
