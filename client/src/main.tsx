import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import router from './router';
import worker from '@mocks/browser';
import './index.css';

async function deferRender() {
  if (import.meta.env.DEV) return await worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
