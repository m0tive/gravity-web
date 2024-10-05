// routes.tsx
import { App } from './App';
import { LandingPage } from './components/LandingPage';
import { GamePage } from './components/GamePage';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/game', element: <GamePage /> },
    ],
  },
];

export default routes;
