import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { AsyncError } from '../../ui/AsyncError';
import { DataList } from '../../ui/DataList';
import { BookId } from './BookId';
import { Skeleton } from '../../ui/Skeleton';

type RequestResult = {
  books: { _id: string }[];
  total: number;
};

type TFictionBooksPage = {
  data: RequestResult;
};

export const FictionBooksLoadedData = () => {
  const data = useLoaderData() as TFictionBooksPage;

  return (
    <Suspense fallback={<Skeleton />}>
      <Await resolve={data.data} errorElement={<AsyncError />}>
        {(resolvedData: RequestResult) => (
          <DataList
            data={resolvedData.books}
            item={(item) => <BookId key={item._id} item={item} />}
          />
        )}
      </Await>
    </Suspense>
  );
};
