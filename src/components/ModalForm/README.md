# Modal form component

## How to use?

```ts
import * as yup from 'yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ModalForm from '@/components/ModalForm';
import { yupResolver } from '@hookform/resolvers/yup';
import Index from '@/components/FormControl/InputField';

export type UserFormValues = {
  email: string;
  username: string;
  phoneNumber?: string;
};

interface UserFormProps {
  open: boolean;
  detail: UserFormValues & Data;
  onClose: () => void;
  onSubmitForm: (formData: UserFormValues) => Promise<any>;
}

const defaultValues: UserFormValues = {
  email: '',
  username: '',
  phoneNumber: '',
};

export default function UserForm({ open, detail, onClose, onSubmitForm }: UserFormProps) {
  const schema = yup.object().shape({
    email: yup.string().email('Your email is invalid.').required('Please enter your email.'),
    username: yup.string().min(6, 'At least 6 characters.').required('Please enter your username.'),
  });

  const userForm = useForm<UserFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const { reset, control, handleSubmit } = userForm;

  useEffect(() => {
    if (detail.id) {
      reset(detail);
    }
  }, [detail, reset]);

  const handleSubmitForm = async (formData: UserFormValues) => {
    await onSubmitForm?.(formData);
  };

  const handleCloseModalForm = () => {
    reset();
    onClose?.();
  };

  return (
    <ModalForm
      formModal={userForm}
      onSubmit={handleSubmit(handleSubmitForm)}
      entity='user'
      modalOpen={open}
      onClose={handleCloseModalForm}
    >
      <form className='p-8'>
        <div className='mb-6'>
          <label className='mb-2 block text-2xl font-medium text-black' htmlFor='email'>
            Email
          </label>
          <Index name='email' control={control} />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block text-2xl font-medium text-black' htmlFor='username'>
            Username
          </label>
          <Index name='username' control={control} />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block text-2xl font-medium text-black' htmlFor='phoneNumber'>
            Phone number
          </label>
          <Index name='phoneNumber' control={control} />
        </div>
      </form>
    </ModalForm>
  );
}
```

### Happy coding!
