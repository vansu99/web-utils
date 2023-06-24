'use client';

import './style.css';
import { AccordionProvider } from './context';
import { Dispatch, SetStateAction } from 'react';
import AccordionList from '@/components/Accordion/AccordionList';
import AccordionItem from '@/components/Accordion/AccordionItem';

interface AccordionProps {
  open: string;
  children?: JSX.Element[];
  onClick?: Dispatch<SetStateAction<string>>;
}

export default function Accordion({ open, onClick, children }: AccordionProps) {
  return (
    <div className='accordion'>
      <AccordionProvider value={{ visible: open, onClick }}>{children}</AccordionProvider>
    </div>
  );
}

Accordion.List = AccordionList;
Accordion.Item = AccordionItem;
