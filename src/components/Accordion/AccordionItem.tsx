'use client';

import React from 'react';

interface AccordionItemProps {
  children: React.ReactNode | JSX.Element;
}

export default function AccordionItem({ children }: AccordionItemProps) {
  return <div className='accordion__item p-8 transition-all duration-300'>{children}</div>;
}
