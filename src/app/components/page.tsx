'use client';

import { useState } from 'react';
import { HelpCircleIcon } from '@/components/Icons';
import { InputNumber } from '@/components/SampleCompts';

export default function ComponentPage() {
  const [quantity, setQuantity] = useState('1');

  const handleChangeInputNumber = (value: string) => {
    setQuantity(value);
  };

  return (
    <main className='container mt-16'>
      <div className='mb-8 w-[20rem]'>
        <h3 className='mb-4 flex items-center text-[1.8rem] text-second'>
          Input number
          <span className='ml-3 cursor-pointer'>
            <HelpCircleIcon className='h-[2.5rem] w-[2.5rem]' />
          </span>
        </h3>
        <InputNumber id='quantity' name='quantity' value={quantity} onChangeInput={handleChangeInputNumber} />
      </div>
    </main>
  );
}
