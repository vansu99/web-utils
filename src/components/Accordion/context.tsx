'use client';

import { createContext, useContext } from 'react';
import { AccordionContextProps } from './types';

const AccordionContext = createContext<AccordionContextProps>({
  visible: '',
});

export const AccordionProvider = AccordionContext.Provider;
export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  return context;
};
