'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

export default function Dashboard() {
  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: `/auth/login`,
    });
  };

  return (
    <div className='container mt-16 min-h-screen'>
      <button onClick={handleLogout} className='btn btn-magic btn-shadow'>
        Logout
      </button>
    </div>
  );
}
