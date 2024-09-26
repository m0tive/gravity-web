import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { GamePage } from './components/GamePage';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    
      <div className={styles.container}>
        <Switch>
          <Route path="/game" component={GamePage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
  
  );
};
