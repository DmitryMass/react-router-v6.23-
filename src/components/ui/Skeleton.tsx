export const Skeleton = () => {
  return (
    <div className='border rounded-3xl shadow-md min-h-[200px] p-4 flex justify-center items-center'>
      <div className='animate-pulse flex space-x-4 w-full'>
        <div className='rounded-full bg-slate-300 size-16'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-6 bg-slate-300 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-6 bg-slate-300 rounded col-span-2'></div>
              <div className='h-6 bg-slate-300 rounded col-span-1'></div>
            </div>
            <div className='h-6 bg-slate-300 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
