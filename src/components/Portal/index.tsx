import './style.css';
import clsx from 'clsx';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './type';
import { useLockBodyScroll } from '@/hooks';

const createPortalWrapper = () => {
  const element = document.createElement('div');
  element.id = 'portal__wrapper';
  return element;
};

const portalElementWrapper = createPortalWrapper();

export default function Portal(props: PortalProps) {
  const { containerClassName = '', bodyClassName = '', bodyStyle, children, containerStyle, onClose } = props;

  useLockBodyScroll();

  useEffect(() => {
    document.body.appendChild(portalElementWrapper);
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

  return createPortal(renderBodyContent, portalElementWrapper);
}
