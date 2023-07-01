import React from 'react';

export interface ModalProps {
  modalOpen: boolean;
  onClose: () => void;
  modalHeader?: boolean;
  modalFooter?: boolean;
  modalCloseIcon?: boolean;
  children: React.ReactNode;
  modalBackgroundColor?: string;
  modalConfirmButtons?: React.ReactNode;
  titleHeader?: string | React.ReactNode;
}

export interface ModalHeaderProps {
  title?: string | React.ReactNode;
  show?: boolean;
}

export interface ModalFooterProps {
  show?: boolean;
  hideCloseBtn?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}
