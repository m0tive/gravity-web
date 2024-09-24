import React from 'react';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Gravity Web</h1>
      <p className={styles.text}>This is a placeholder for the game UI.</p>
    </div>
  );
};
