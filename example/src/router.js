import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import SimpleForm from './pages/SimpleForm';
import InitializeForm from './pages/InitializeForm';
import Loading from './pages/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <SimpleForm />,
      },
      {
        path: '/init',
        element: <InitializeForm />,
      },
      {
        path: '/loading',
        element: <Loading />,
      },
    ],
  },
]);

export default router;
