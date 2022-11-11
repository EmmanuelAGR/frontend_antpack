import { createBrowserRouter } from 'react-router-dom';

import { User } from '../pages/user';
import { Home } from '../pages/home/index';

export default createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <div>Error 404</div>,
      },
      {
        path: 'user',
        element: <User />,
        errorElement: <div>Error 404</div>,
      },
      {
        path: 'user/:id',
        element: <User />,
        errorElement: <div>Error 404</div>,
      },
    ],
    errorElement: <div>Error 404</div>,
  },
]);
