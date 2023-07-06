import React from 'react';

export interface ModalProps {
  modalOpen: boolean;
  onClose: () => void;
  classNames?: string;
  modalHeader?: boolean;
  modalFooter?: boolean;
  modalCloseIcon?: boolean;
  children: React.ReactNode;
  modalConfirmButtons?: React.ReactNode;
  titleHeader?: string | React.ReactNode;
}

export interface ModalHeaderProps {
  show?: boolean;
  closeIcon?: boolean;
  onClose?: () => void;
  title?: string | React.ReactNode;
}

export interface ModalFooterProps {
  show?: boolean;
  hideCloseBtn?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}
