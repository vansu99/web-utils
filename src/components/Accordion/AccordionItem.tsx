'use client';

import clsx from 'clsx';
import React from 'react';

interface AccordionItemProps {
  classNames?: string;
  children: React.ReactNode | JSX.Element;
}

export default function AccordionItem({ children, classNames }: AccordionItemProps) {
  return <div className={clsx('accordion__item p-8 transition-all duration-300', classNames)}>{children}</div>;
}
