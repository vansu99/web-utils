import { FocusEvent } from 'react';

type InputSizes = {
  sizes: 'large' | 'medium' | 'small';
};

export type InputNumberProps = {
  id: string;
  name: string;
  // min?: number;
  // max?: number;
  value: string;
  focus?: boolean;
  size?: InputSizes;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
  rounded?: number | string;
  customClassInput?: string;
  onChangeInput?: (value: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};
