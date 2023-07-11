import './style.css';
import clsx from 'clsx';
import Portal from '@/components/Portal';
import type { ModalProps } from './type';
import { useLockBodyScroll } from '@/hooks';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useCallback } from 'react';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalFooter from '@/components/Modal/ModalFooter';

export default function Modal(props: ModalProps) {
  const {
    onClose,
    children,
    classNames = '',
    titleHeader = '',
    animate = 'zoom',
    modalOpen = false,
    modalHeader = true,
    fullScreen = false,
    modalFooter = true,
    modalConfirmButtons,
    modalCloseIcon = true,
    preventClickOutside = false,
  } = props;

  const modalRef = useRef<HTMLElement>(null);

  const DisableBodyScroll = useLockBodyScroll;

  const handleClickOutSide = () => {
    if (preventClickOutside) return;
    onClose && onClose();
  };

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
      <CSSTransition in={modalOpen} nodeRef={modalRef} timeout={250} classNames={animate} unmountOnExit>
        <>
          <DisableBodyScroll />
          <section
            tabIndex={0}
            ref={modalRef}
            className={clsx(
              'modal__root fixed bottom-0 left-0 right-0 top-0 z-[9999] flex items-center justify-center',
              fullScreen && 'fullScreen'
            )}
          >
            <div
              tabIndex={-1}
              onClick={handleClickOutSide}
              className={clsx('modal__backdrop', fullScreen && 'fullScreen')}
            ></div>

            <div
              aria-modal={modalOpen}
              role='modal'
              className={clsx('modal__wrapper max-w-[40rem]', fullScreen && 'fullScreen', classNames)}
            >
              <ModalHeader show={modalHeader} title={titleHeader} onClose={onClose} iconHeader={modalCloseIcon} />
              <div className='modal__body'>{children}</div>
              <ModalFooter show={modalFooter} onClose={onClose}>
                {modalConfirmButtons}
              </ModalFooter>
            </div>
          </section>
        </>
      </CSSTransition>
    </Portal>
  );
}
