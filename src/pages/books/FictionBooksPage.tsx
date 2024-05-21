import { FictionBooksLoadedData } from '../../components/books/fiction/FictionBooksLoadedData';
import { Title } from '../../components/ui/Title';

export const FictionBooksPage = () => {
  return (
    <>
      <Title>Сторінка з художнім альбомом</Title>
      <div className='text-md24 flex justify-center items-center w-full h-[200px] bg-green-500 mb-10'>
        SOME 1 INFO
      </div>
      <FictionBooksLoadedData />
      <div className='text-md24 flex justify-center items-center w-full h-[200px] bg-blue-300 mt-10'>
        SOME 2 INFO
      </div>
    </>
  );
};
