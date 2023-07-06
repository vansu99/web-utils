import './style.css';
import clsx from 'clsx';
import Portal from '@/components/Portal';
import type { ModalProps } from './type';
import { useEffect, useRef, useCallback } from 'react';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalFooter from '@/components/Modal/ModalFooter';
import { CSSTransition } from 'react-transition-group';

export default function Modal(props: ModalProps) {
  const {
    onClose,
    children,
    modalOpen = false,
    modalHeader = true,
    modalFooter = true,
    classNames = '',
    titleHeader = '',
    modalConfirmButtons,
    modalCloseIcon = false,
  } = props;

  const modalRef = useRef<HTMLElement>(null);

  const handleCloseByEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose && onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEscape);
    return () => document.removeEventListener('keydown', handleCloseByEscape);
  }, [handleCloseByEscape]);

  return (
    <Portal>
      <CSSTransition in={modalOpen} nodeRef={modalRef} timeout={250} classNames='zoom' unmountOnExit>
        <section
          tabIndex={0}
          ref={modalRef}
          className='modal__root fixed bottom-0 left-0 right-0 top-0 z-[9999] flex items-center justify-center'
        >
          <div
            tabIndex={-1}
            onClick={onClose}
            className='absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-60'
          ></div>
          <div className={clsx('modal__wrapper max-w-[40rem]', classNames)}>
            <ModalHeader show={modalHeader} title={titleHeader} onClose={onClose} closeIcon={modalCloseIcon} />
            <div className='modal__body'>{children}</div>
            <ModalFooter show={modalFooter} onClose={onClose}>
              {modalConfirmButtons}
            </ModalFooter>
          </div>
        </section>
      </CSSTransition>
    </Portal>
  );
}
