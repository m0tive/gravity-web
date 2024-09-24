import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { GamePage } from './components/GamePage';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div className={styles.container}>
      {isGameStarted ? <GamePage /> : <LandingPage onStart={startGame} />}
    </div>
  );
};
