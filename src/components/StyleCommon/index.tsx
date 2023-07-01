'use client';

import React from 'react';
import dataClipboard from './data';
import { useCopyToClipboard } from '@/hooks';
import { FaRegClipboard } from 'react-icons/fa';
import { CheckedIcon } from '@/components/Icons';

export default function StyleCommon() {
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [copied, _, copy] = useCopyToClipboard();

  const handleCopy = (code: string, index: number) => {
    copy(code);
    setSelectedId(index);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setSelectedId(null), 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedId]);

  return (
    <div className='grid grid-cols-5 gap-6'>
      {dataClipboard.map((data, index) => (
        <div
          key={data.name}
          onClick={() => handleCopy(data.code, index)}
          className={`flex min-h-[6.2rem] cursor-pointer items-center justify-between rounded-lg border border-solid px-6 py-4 transition-all duration-300  ${
            selectedId === index && copied ? 'border-first hover:bg-first/20' : 'border-second hover:bg-second/20'
          }`}
        >
          <span className='text-2xl text-white'>{data.title}</span>
          {selectedId === index && copied ? <CheckedIcon /> : <FaRegClipboard className='text-[1.45rem] text-white' />}
        </div>
      ))}
    </div>
  );
}
