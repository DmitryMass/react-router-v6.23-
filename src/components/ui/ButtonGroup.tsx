import { motion } from 'framer-motion';
import { useQueryParams } from '../../hooks/useQueryParams';

export const ButtonGroup = () => {
  const setQueryParam = useQueryParams();

  return (
    <div className='flex justify-center items-center gap-4 mt-5'>
      <motion.button
        whileHover={{
          rotate: 25,
          scale: 1.1,
        }}
        className='bg-green-500'
        onClick={() => setQueryParam('filebedra', 'yes')}
      >
        YES
      </motion.button>
      <motion.button
        whileHover={{
          rotate: 180,
          scale: 1.1,
        }}
        className='bg-red-500'
        onClick={() => setQueryParam('filebedra', 'no')}
      >
        NO
      </motion.button>
    </div>
  );
};
