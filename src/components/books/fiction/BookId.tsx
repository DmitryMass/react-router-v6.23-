import { FC } from 'react';

type TBookIdProps = {
  item: { _id: string };
};

export const BookId: FC<TBookIdProps> = ({ item }) => {
  return <div>{item._id}</div>;
};
