export function createThrusterParticle(scene: Phaser.Scene) {
  const particles = scene.add.particles(undefined);

  particles.createEmitter({
    x: 400,
    y: 300,
    speed: { min: -200, max: 200 },
    angle: { min: 0, max: 360 },
    scale: { start: 0.5, end: 0 },
    blendMode: 'ADD',
    lifespan: 300,
  });

  return particles;
}
