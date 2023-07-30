'use client';

import Link from 'next/link';
import React from 'react';

export default function Error() {
  return (
    <div className='container mt-16 min-h-screen'>
      <h2 className='mb-8 text-center text-[2rem] text-error'>Something went wrong!</h2>
      <Link href='/' className='text-center text-[1.6rem] text-white'>
        Go to home
      </Link>
    </div>
  );
}
