import React from 'react';
import type { ModalFooterProps } from './type';

export default function ModalFooter({ onClose, hideCloseBtn = false, children, show = true }: ModalFooterProps) {
  return (
    <React.Fragment>
      {show ? (
        <div className='modal__footer'>
          {!hideCloseBtn ? (
            <button type='button' onClick={onClose} className='btn btn-outline mr-3 min-w-[7rem] p-3'>
              Close
            </button>
          ) : null}
          {children}
        </div>
      ) : null}
    </React.Fragment>
  );
}
