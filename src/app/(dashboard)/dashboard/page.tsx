'use client';

import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Dashboard() {
  const session = useSession();

  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: `/auth/login`,
    });
  };

  return (
    <div className='container mt-16 min-h-screen'>
      <div className='mb-6'>
        <h3 className='mb-4 text-[1.5rem] text-white'>{session.data?.user.name}</h3>
        <p className='text-[1.5rem] text-white'>{session.data?.user.email}</p>
      </div>

      <div className='mb-6'>
        <Link className='btn btn-magic btn-shadow inline-block' href='/dashboard/products'>
          Product page
        </Link>
      </div>

      <button onClick={handleLogout} className='btn btn-magic btn-shadow'>
        Logout
      </button>
    </div>
  );
}
