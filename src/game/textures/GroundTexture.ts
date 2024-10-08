export function createGroundTexture(texture: Phaser.Textures.CanvasTexture) {
  const ctx = texture.context;
  const width = texture.width;
  const height = texture.height;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const value = Math.floor(Math.random() * 50 + 150);
      ctx.fillStyle = `rgb(${value}, ${value}, ${value})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }

  texture.refresh();
}
