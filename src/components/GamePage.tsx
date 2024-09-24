import React, { useEffect, useRef } from 'react';
import styles from './GamePage.module.scss';

export const GamePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Placeholder for rendering the game
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={window.innerWidth}
        height={window.innerHeight}
        role="presentation" // Add role here for accessibility
      />
    </div>
  );
};
