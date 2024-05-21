import { useLoaderData } from 'react-router-dom';
import { ButtonGroup } from '../../components/ui/ButtonGroup';
import { Title } from '../../components/ui/Title';

type TClassicBook = {
  id: string;
};

export const ClassicBooksPage = () => {
  const data = useLoaderData() as TClassicBook;

  return (
    <>
      <Title>Сторінка класичних альбомів</Title>
      <div>{data.id}</div>
      <ButtonGroup />
    </>
  );
};
