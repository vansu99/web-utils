'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import { HelpCircleIcon } from '@/components/Icons';
import { InputNumber } from '@/components/SampleCompts';

export default function ComponentPage() {
  const [quantity, setQuantity] = useState('1');
  const [openModal, setOpenModal] = useState(false);

  const handleChangeInputNumber = (value: string) => {
    setQuantity(value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderConfirmButtons = () => (
    <div className='flex items-center gap-4'>
      <button className='btn btn-magic min-w-[7rem] p-3' type='button'>
        Save
      </button>
    </div>
  );

  return (
    <main className='container mt-16'>
      <div className='mb-8 '>
        <h3 className='mb-4 flex items-center text-[1.8rem] text-second'>
          Input number component
          <span className='ml-3 cursor-pointer'>
            <HelpCircleIcon className='h-[2.5rem] w-[2.5rem]' />
          </span>
        </h3>
        <div className='max-w-[20rem]'>
          <InputNumber id='quantity' name='quantity' value={quantity} onChangeInput={handleChangeInputNumber} />
        </div>
      </div>
      <div className='mb-8'>
        <h3 className='mb-4 flex items-center text-[1.8rem] text-second'>
          Modal component
          <span className='ml-3 cursor-pointer'>
            <HelpCircleIcon className='h-[2.5rem] w-[2.5rem]' />
          </span>
        </h3>
        <button className='btn btn-magic' onClick={handleOpenModal}>
          Open modal
        </button>
        <Modal
          modalOpen={openModal}
          onClose={handleCloseModal}
          modalConfirmButtons={renderConfirmButtons()}
          titleHeader='Modal Header'
        >
          <p className='text-[1.4rem]'>Modal content</p>
        </Modal>
      </div>
    </main>
  );
}
