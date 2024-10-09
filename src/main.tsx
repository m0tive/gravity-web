import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import routes from './routes';
import 'eruda';

if (window.location.search.includes('eruda=true') || localStorage.getItem('active-eruda') === 'true') {
    eruda.init();
}

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
