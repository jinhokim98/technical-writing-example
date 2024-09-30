import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from '@pages/Home';
import CrewDetail from '@components/Crew';
import CrewNew from '@components/CrewNew';

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
    ],
  },
]);

export default router;
