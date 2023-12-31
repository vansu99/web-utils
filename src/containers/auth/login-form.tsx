'use client';

import React from 'react';
import * as yup from 'yup';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { InputField } from '@/components/FormControl';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';

export interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const schema = yup.object().shape({
    email: yup.string().required('Please enter your email.'),
    password: yup.string().required('Please enter your password.').min(6, 'At least 6 characters.'),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (formData: LoginFormValues) => {
    const response = await signIn('credentials', {
      ...formData,
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/dashboard',
    });

    if (response?.ok) {
      router.push(searchParams?.get('from') || '/dashboard');
    }
  };

  const handleSubmitForm = async (formData: LoginFormValues) => {
    await onSubmitForm?.(formData);
  };

  return (
    <div className='mx-auto w-full max-w-[40rem] overflow-hidden rounded-lg border-[0.3rem] border-solid border-first bg-white'>
      <form className='p-8' onSubmit={handleSubmit(handleSubmitForm)}>
        <h2 className='mb-6 text-center text-[1.8rem] font-medium text-black'>LOGIN</h2>
        <div className='mb-6'>
          <label className='mb-2 block text-2xl font-medium text-black' htmlFor='email'>
            Email
          </label>
          <InputField name='email' control={control} />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block text-2xl font-medium text-black' htmlFor='password'>
            Password
          </label>
          <InputField type='password' name='password' control={control} />
        </div>
        <button
          className='block w-full rounded-md border-0 bg-black p-6 text-center text-[1.6rem] font-medium text-white outline-none'
          type='submit'
        >
          {isSubmitting ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
