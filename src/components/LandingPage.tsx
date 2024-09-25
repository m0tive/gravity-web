import React from 'react';
import styles from './LandingPage.module.scss';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Gravity Web</h1>
      <p className={styles.text}>A web-based version of the classic Gravity game.</p>
      <button className={styles.startButton} onClick={onStart}>
        Start
      </button>
      <p className={styles.repoLink}>
        <a href="https://github.com/m0tive/gravity-web" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </p>
    </div>
  );
};
