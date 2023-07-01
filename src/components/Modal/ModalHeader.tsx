import React from 'react';
import type { ModalHeaderProps } from './type';

export default function ModalHeader({ title, show = true }: ModalHeaderProps) {
  return (
    <React.Fragment>
      {show ? (
        <div className='modal__header'>
          {title ? <h3 className='text-[1.7rem] leading-snug text-black'>{title}</h3> : null}
        </div>
      ) : null}
    </React.Fragment>
  );
}
