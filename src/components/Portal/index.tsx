import './style.css';
import clsx from 'clsx';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './type';
import { useLockBodyScroll } from '@/hooks';

const createPortalWrapper = () => {
  const element = document.createElement('div');
  element.id = 'portal__wrapper';
  document.body.appendChild(element);
  return element;
};

export default function Portal(props: PortalProps) {
  const { containerClassName = '', bodyClassName = '', bodyStyle, children, containerStyle, onClose } = props;

  const [portal, setPortal] = useState<HTMLElement | null>(null);
  useLockBodyScroll();

  useLayoutEffect(() => {
    let element = document.getElementById('portal__wrapper') as HTMLElement;
    let portalCreated = false;

    if (!element) {
      element = createPortalWrapper();
      portalCreated = true;
    }

    setPortal(element);

    // return () => {
    //   if (portalCreated && element.parentNode) {
    //     element.parentNode.removeChild(element);
    //   }
    // };
  }, []);

  const renderBodyContent = (
    <div
      style={containerStyle}
      className={clsx(
        'fixed bottom-0 left-0 right-0 top-0 z-[9999] flex items-center justify-center',
        containerClassName
      )}
    >
      <div onClick={onClose} className='absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-70'></div>
      <div style={bodyStyle} className={clsx('portal__body relative z-10 w-full', bodyClassName)}>
        {children}
      </div>
    </div>
  );

  if (!portal) return;

  return createPortal(renderBodyContent, portal);
}
