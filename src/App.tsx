import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position='top-right' duration={3000} />
    </>
  );
};

export default App;
