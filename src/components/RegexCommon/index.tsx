import React from 'react';
import regexData from './data';

export default function RegexCommon() {
  return (
    <div>
      {regexData.map((item, index) => (
        <div className='mb-4' key={index}>
          <h4 className='mb-6 text-[1.8rem] font-medium text-second'>※{item.name}:</h4>
          <code className='text-[1.4rem] text-white'>{item.value}</code>
          {item.child?.length > 0 ? (
            <ul>
              {item.child.map((it) => (
                <li key={it.name} className='mb-4 pl-8'>
                  <p className='mb-4 text-[1.5rem] text-second'>+ {it.name}</p>
                  <code className='text-[1.5rem] text-white'>{it.data}</code>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
