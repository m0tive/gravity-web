import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.scss';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game');
  };

  // Access build time and git hash from environment variables
  const buildTime = import.meta.env.VITE_BUILD_TIME;
  const gitHash = import.meta.env.VITE_GIT_HASH;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gravity Web 🚀</h1>
      <p className={styles.text}>A web-based version of the classic Gravity game.</p>
      <button className={styles.startButton} onClick={handleStart}>
        Start
      </button>
      <p className={styles.repoLink}>
        <a href="https://github.com/m0tive/gravity-web" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </p>
      <p className={styles.text}>{buildTime} | {gitHash}</p>
    </div>
  );
};
