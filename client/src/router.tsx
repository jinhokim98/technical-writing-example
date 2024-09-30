import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from '@pages/Home';
import CrewDetail from '@components/Crew';
import CrewNew from '@components/CrewNew';
import Parents from '@pages/Parents';
import {Suspense} from 'react';
import Fallback from '@components/Fallback';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/crew/:nickname',
        element: <CrewDetail />,
      },
      {
        path: '/crew/new',
        element: <CrewNew />,
      },
      {
        path: '/parent',
        element: (
          <Suspense fallback={<Fallback text="부모를 불러오는 중" />}>
            <Parents />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
