import axios from 'axios';
import { createBrowserRouter, defer } from 'react-router-dom';
import RootLayout from '../components/layouts/RootLayout';
import ErrorComponent from '../components/ui/Error';
import HomePage from '../pages/home/HomePage';
import BooksLayout from '../components/layouts/BooksLayout';
import { ClassicBooksPage } from '../pages/books/ClassicBooksPage';
import { useGetQueryParams } from '../hooks/useGetQueryParams';
import { FictionBooksPage } from '../pages/books/FictionBooksPage';
import { getFictionBooks } from './fetchFn';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/books',
        element: <BooksLayout />,
        children: [
          {
            // MY CLASSIC GET ROUTE EXAMPLE
            index: true,
            errorElement: <ErrorComponent />,
            element: <ClassicBooksPage />,
            loader: async ({ request }) => {
              // request url for getting queryparams if needed
              const data = await axios.get(
                `https://jsonplaceholder.typicode.com/albums/${
                  useGetQueryParams(new URL(request.url)) === 'yes' ? 1 : 2
                }`
              );
              return data.data;
            },
          },
        ],
      },
      {
        path: '/fiction',
        element: <BooksLayout />,
        children: [
          {
            //SUSPENSE + AWAIT REQUEST GET ROUTE EXAMPLE
            index: true,
            errorElement: <ErrorComponent />,
            element: <FictionBooksPage />,
            loader: async () =>
              defer({
                data: getFictionBooks(),
              }),
          },
        ],
      },
    ],
  },
]);
