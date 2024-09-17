import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SessionProvider } from './contexts/SessionContext.tsx';

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
