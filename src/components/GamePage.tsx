import React from 'react';
import { useBlocker } from 'react-router-dom';
import { GameCanvas } from './GameCanvas';
import styles from './GamePage.module.scss';

export const GamePage: React.FC = () => {
  useBlocker(() => !window.confirm('Are you sure you want to leave?'));

  return (
    <div className={styles.container}>
      <GameCanvas />
    </div>
  );
};
