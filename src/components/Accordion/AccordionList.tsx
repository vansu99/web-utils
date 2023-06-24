'use client';

import React from 'react';
import { useAccordionContext } from '@/components/Accordion/context';

interface AccordionListProps {
  name: string;
  title: string;
  icon?: JSX.Element;
  children: JSX.Element | React.ReactNode;
}

export default function AccordionList({ name, title, icon, children }: AccordionListProps) {
  const { onClick, visible } = useAccordionContext();

  const isVisible = React.useMemo(() => visible === name, [visible, name]);

  const handleClick = () => {
    if (visible === name) {
      onClick && onClick('');
    } else {
      onClick && onClick(name);
    }
  };

  return (
    <div className='mb-12'>
      <div
        onClick={handleClick}
        className='flex cursor-pointer items-center justify-between border border-solid border-first p-8'
      >
        <span className='select-none text-[1.8rem] text-white'>{title}</span>
        <span className='select-none text-[2rem] text-white'>{icon || '+'}</span>
      </div>
      {isVisible ? children : null}
    </div>
  );
}
