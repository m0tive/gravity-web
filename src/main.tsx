import React from 'react';
import ReactDOM from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
