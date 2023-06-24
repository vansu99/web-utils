import React from 'react';
import { FaRegClipboard } from 'react-icons/fa';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import dataClipboard from '@/app/utils/components/StyleCommon/data';

export default function StyleCommon() {
  const [_, copy] = useCopyToClipboard();

  const handleCopy = (code: string) => {
    copy(code);
  };

  return (
    <div className='grid grid-cols-5 gap-6'>
      {dataClipboard.map((data) => (
        <div
          key={data.name}
          onClick={() => handleCopy(data.code)}
          className='flex cursor-pointer items-center justify-between rounded-lg border border-solid border-second px-6 py-4 transition-all hover:bg-second/20'
        >
          <span className='text-2xl text-white'>{data.title}</span>
          <FaRegClipboard className='text-[1.45rem] text-white' />
        </div>
      ))}
    </div>
  );
}
