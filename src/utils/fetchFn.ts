import axios from 'axios';

export const getClassicBooks = async () => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/albums');
    if (data.status === 200) {
      console.log(data.data);
      return data.data;
    }
  } catch (err) {
    throw new Response('Failed to fetch books', { status: 500 });
  }
};

export const getFictionBooks = async (fiebedraValue: string | null) => {
  console.log(fiebedraValue);
  try {
    // const data = await axios.get(
    //   `https://jsonplaceholder.typicode.com/albums/${
    //     fiebedraValue === 'yes' ? 1 : 2
    //   }`
    // );
    const data = await axios.get(
      `http://localhost:3001/catalog/archive/books?page=1&limit=10`
    );

    // throw new Response('', {
    //   statusText: 'S',
    //   status: 403,
    // });

    if (data.status === 200) {
      return data.data;
    }
  } catch (err: any) {
    console.log(err);
    throw new Response('SOME ERROR', {
      statusText: err.statusText,
      status: err.status,
    });
  }
};
