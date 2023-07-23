import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import type { LoginResponse } from '@/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '@/components/FormControl/input-field';

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  initialFormValues: LoginFormValues;
  onSubmitForm: (formData: LoginFormValues) => Promise<LoginResponse>;
}

export default function LoginForm({ initialFormValues, onSubmitForm }: LoginFormProps) {
  const schema = yup.object().shape({
    email: yup.string().required('Please enter your email.'),
    password: yup.string().required('Please enter your password.').min(6, 'At least 6 characters.'),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: initialFormValues,
    resolver: yupResolver(schema),
  });

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
