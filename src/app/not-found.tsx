import React from 'react';

function notFound() {
  return (
    <div className='flex h-[50vh] w-full flex-col items-center justify-center'>
      <p className='text-muted-foreground mt-2 text-xl text-white'>Page not found</p>
    </div>
  );
}

export default notFound;
