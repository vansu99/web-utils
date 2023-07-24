import { BaseSyntheticEvent, ReactNode } from 'react';
import type { ModalProps } from '@/components/Modal/type';
import type { UseFormReturn } from 'react-hook-form';

export interface ModalFormProps extends ModalProps {
  id?: number;
  entity?: string;
  children: ReactNode;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  formModal: UseFormReturn<any>;
}
