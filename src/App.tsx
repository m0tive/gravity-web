import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { GamePage } from './components/GamePage';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const startGame = () => {
    setIsGameStarted(true);
    navigate('/game');
  };

  const confirmExitGame = () => {
    return window.confirm('Are you sure you want to leave the game and go back to the landing page?');
  };

  useEffect(() => {
    const handlePopState = () => {
      if (location.pathname === '/game') {
        if (confirmExitGame()) {
          setIsGameStarted(false);
        } else {
          navigate('/game'); // Stay on the game page if they cancel
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, navigate]);

  return (
    <div className={styles.container}>
      {isGameStarted ? <GamePage /> : <LandingPage onStart={startGame} />}
    </div>
  );
};
