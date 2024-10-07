import React, { useEffect } from 'react';
import { initializePhaserGame } from '../phaserGame';

export const GameCanvas: React.FC = () => {
  useEffect(() => {
    const phaserGame = initializePhaserGame();

    return () => {
      // Clean up Phaser when the component unmounts
      phaserGame.destroy(true);
    };
  }, []);

  return <div id="game-container" data-testid="game-canvas" style={{ width: '100%', height: '100%' }} />;
};
