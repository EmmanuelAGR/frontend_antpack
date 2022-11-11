import { RouterProvider } from 'react-router-dom';

import router from './routes/routes';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
