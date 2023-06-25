'use client';

import React from 'react';
import sampleTestData from './data';

export default function SampleTestData() {
  return (
    <div className=''>
      {sampleTestData.map((sample, index) => (
        <div className='mb-4' key={index}>
          <h4 className='mb-6 text-[1.8rem] font-medium text-second'>{sample.name}:</h4>
          <ul>
            {sample.samples.map((item, idx) => (
              <li className='mb-4' key={item.name + idx}>
                <span className='text-2xl text-white'>
                  - {item.name}: {item.data}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
