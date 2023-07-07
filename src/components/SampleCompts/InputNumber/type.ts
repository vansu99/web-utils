import { FocusEvent, InputHTMLAttributes } from 'react';

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  error?: boolean;
  focus?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  placeholder?: string;
  customClassInput?: string;
  onChangeInput?: (value: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}
