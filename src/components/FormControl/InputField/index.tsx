import './style.css';
import clsx from 'clsx';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface InputFieldProps {
  name: string;
  type?: 'text' | 'password';
  control: Control<any>;
}

function InputField({ name, type = 'text', control }: InputFieldProps) {
  const {
    field: { value, ref, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div>
      <input
        className={clsx('input__root', !!error && 'input__error')}
        type={type}
        name={name}
        id={name}
        value={value}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {!!error?.message?.length ? <p className='pt-1 text-xl text-error'>{error?.message}</p> : null}
    </div>
  );
}

export default InputField;
