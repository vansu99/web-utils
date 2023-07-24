'use client';

import { useState } from 'react';
import UserForm, { UserFormValues } from '@/containers/auth/user-form';

const userFaker = {
  id: 1,
  email: 'admin@gmail.com',
  username: 'super admin',
  phoneNumber: '0933839999',
};

export default function Admin() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmitForm = (formValues: UserFormValues) => {
    console.log({ formValues });
    return new Promise((resolve) => {
      resolve('OK');
    });
  };

  return (
    <div className='container mt-16 min-h-screen'>
      <div className='flex gap-4'>
        <button className='btn btn-magic' onClick={() => setOpenModal(true)}>
          {userFaker.id ? 'Edit user' : 'Create new user'}
        </button>

        <UserForm detail={userFaker} open={openModal} onClose={handleCloseModal} onSubmitForm={onSubmitForm} />
      </div>
    </div>
  );
}
