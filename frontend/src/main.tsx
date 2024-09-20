import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { SessionProvider } from './providers';

const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <SessionProvider>
        <App />
      </SessionProvider>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
