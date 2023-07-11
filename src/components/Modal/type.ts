import React from 'react';

export interface ModalProps {
  modalOpen: boolean;
  onClose: () => void;
  classNames?: string;
  fullScreen?: boolean;
  modalHeader?: boolean;
  modalFooter?: boolean;
  modalCloseIcon?: boolean;
  animate?: 'zoom' | 'fade';
  children: React.ReactNode;
  preventClickOutside?: boolean;
  modalConfirmButtons?: React.ReactNode;
  titleHeader?: string | React.ReactNode;
}

export interface ModalHeaderProps {
  show?: boolean;
  iconHeader?: boolean;
  onClose?: () => void;
  title?: string | React.ReactNode;
}

export interface ModalFooterProps {
  show?: boolean;
  hideCloseBtn?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}
