import axios from 'axios';
import { activateSlowRequest } from './activateSlowRequest';
import { toast } from 'sonner';

// Basic Page
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

// Updated Page Slowed for loading
export const getFictionBooks = async () => {
  try {
    await activateSlowRequest(2000);
    const data = await axios.get(
      `http://localhost:3001/catalog/archive/books?page=1&limit=10`
    );

    if (data.status === 200) return data.data;
  } catch (err: any) {
    const clientToastMessage =
      err.response.data.error || 'Вибачте виникла помилка';
    toast.error(clientToastMessage);

    const browserError = 'Oops, sorry, something went wrong';
    throw new Response(browserError, {
      statusText: browserError,
      status: err.response.data.statusCode || 500,
    });
  }
};
