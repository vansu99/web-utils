import type { LoginResponse } from '@/types/auth';
import LoginForm from '@/containers/auth/login-form';
import type { LoginFormValues } from '@/containers/auth/login-form';

export default function Login() {
  const onSubmitForm = (formData: LoginFormValues): Promise<LoginResponse> => {
    console.log({ formData });
    return new Promise((resolve) => {
      resolve({
        success: true,
        data: {
          accessToken: 'wqeqwe23123',
          refreshToken: 'asdasd42342342342',
        },
      });
    });
  };

  return (
    <div className='container mt-16 min-h-screen'>
      <LoginForm onSubmitForm={onSubmitForm} />
    </div>
  );
}
