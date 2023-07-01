import './style.css';
import Portal from '@/components/Portal';
import type { ModalProps } from './type';
import { useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalFooter from '@/components/Modal/ModalFooter';

export default function Modal(props: ModalProps) {
  const {
    onClose,
    children,
    modalOpen = false,
    modalHeader = true,
    modalFooter = true,
    titleHeader = '',
    modalConfirmButtons,
    modalCloseIcon = false,
    modalBackgroundColor = 'bg-white',
  } = props;

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
    <CSSTransition in={modalOpen} classNames='zoom' timeout={250} unmountOnExit>
      {(status) => (
        <Portal
          bodyStyle={{ transition: 'all 250ms ease 0s' }}
          bodyClassName={`max-w-[40rem] rounded-lg ${modalBackgroundColor}`}
          onClose={onClose}
          visible={status !== 'exited'}
        >
          <ModalHeader show={modalHeader} title={titleHeader} />
          <div className='modal__body'>{children}</div>
          <ModalFooter show={modalFooter} onClose={onClose}>
            {modalConfirmButtons}
          </ModalFooter>
        </Portal>
      )}
    </CSSTransition>
  );
}
