import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { AsyncError } from '../../components/ui/AsyncError';
import { ButtonGroup } from '../../components/ui/ButtonGroup';
import { Title } from '../../components/ui/Title';

type RequestResult = {
  books: { _id: string }[];
  total: number;
};

type TFictionBooksPage = {
  data: RequestResult;
};

export const FictionBooksPage = () => {
  const data = useLoaderData() as TFictionBooksPage;
  return (
    <div>
      <Title>Сторінка з художнім альбомом</Title>

      <Suspense
        fallback={<p className='text-blue-600 text-md24'>Loading...</p>}
      >
        <Await resolve={data.data} errorElement={<AsyncError />}>
          {(resolvedData: RequestResult) => (
            <div>
              {resolvedData.books.map((book) => (
                <div key={book._id}>{book._id}</div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>

      <ButtonGroup />
    </div>
  );
};
