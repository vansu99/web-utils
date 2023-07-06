import { createPortal } from 'react-dom';
import type { PortalProps } from './type';
import { useLockBodyScroll } from '@/hooks';
import { useLayoutEffect, useState } from 'react';

const createPortalWrapper = () => {
  const element = document.createElement('div');
  element.id = 'portal__wrapper';
  element.tabIndex = -1;
  document.body.appendChild(element);
  return element;
};

export default function Portal(props: PortalProps) {
  const { children } = props;

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

    return () => {
      if (portalCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  if (!portal) return;
  return createPortal(children, portal);
}
