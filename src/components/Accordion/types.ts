import { Dispatch, SetStateAction } from 'react';

export interface AccordionContextProps {
  visible: string;
  onClick?: Dispatch<SetStateAction<string>>;
}
