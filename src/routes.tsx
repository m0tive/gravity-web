import { createHashRouter } from 'react-router-dom';
import { App } from './App';
import { LandingPage } from './components/LandingPage';
import { GamePage } from './components/GamePage';

const routes = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/game', element: <GamePage /> },
    ],
  },
]);

export default routes;
