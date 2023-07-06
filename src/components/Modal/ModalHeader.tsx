import React from 'react';
import type { ModalHeaderProps } from './type';
import { CloseIcon } from '@/components/Icons';

export default function ModalHeader({ title, onClose, show = true, closeIcon = false }: ModalHeaderProps) {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <React.Fragment>
      {show ? (
        <div className='modal__header'>
          {title ? <h3 className='text-[1.7rem] leading-snug text-black'>{title}</h3> : null}
          {!closeIcon ? (
            <button className='inline-block' type='button' onClick={handleClose}>
              <CloseIcon />
            </button>
          ) : null}
        </div>
      ) : null}
    </React.Fragment>
  );
}
