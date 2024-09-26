import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { GamePage } from './components/GamePage';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};
