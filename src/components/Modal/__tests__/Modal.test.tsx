/**
 * Case 1: Not the header modal, otherwise
 * Case 2: Not the footer modal, otherwise
 * Case 3: Not the close icon modal, otherwise
 * Case 4: Hide the close button, otherwise
 * Case 5: Add the buttons at the footer modal
 * Case 6: Close the modal by pressing the escape keyboard
 * Case 7: Close the modal by pressing the other keyboard
 * Case 8: Hide the modal when click the overlay of modal
 * Case 9: Responsive on the all of devices
 */

import * as React from 'react';
import '@testing-library/jest-dom';
import Modal from '@/components/Modal';
import { render, fireEvent } from '@testing-library/react';

describe('Modal component', () => {
  test('displays the modal content when modalOpen is true', () => {
    const handleCloseModal = jest.fn();

    const { getByRole } = render(
      <Modal modalOpen={true} onClose={handleCloseModal} titleHeader='Modal Header'>
        <p>Modal content</p>
      </Modal>
    );

    const modalContent = getByRole('modal');
    expect(modalContent).toBeInTheDocument();
  });

  test('does not display the modal content when modalOpen is false', () => {
    const handleCloseModal = jest.fn();
    const { queryByText } = render(
      <Modal modalOpen={false} onClose={handleCloseModal}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalContent = queryByText('Modal Content');
    expect(modalContent).toBeNull();
  });

  test('closes the modal when the Escape key is pressed', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal modalOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onCloseMock).toHaveBeenCalled();
  });

  test('closes the modal when the other key is pressed', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal modalOpen={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Enter' });

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test('displays the modal header when modalHeader prop is true', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Modal modalOpen={true} modalHeader={true} titleHeader='Modal Header' onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalHeader = getByText('Modal Header');
    expect(modalHeader).toBeInTheDocument();
  });

  test('does not display the modal header when modalHeader prop is false', () => {
    const onCloseMock = jest.fn();
    const { queryByText } = render(
      <Modal modalOpen={true} modalHeader={false} titleHeader='Modal Header' onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalHeader = queryByText('Modal Header');
    expect(modalHeader).toBeNull();
  });

  test('displays the modal footer when modalFooter prop is true', () => {
    const onCloseMock = jest.fn();
    const { getByRole } = render(
      <Modal modalOpen={true} modalFooter={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalFooterCloseButton = getByRole('button');
    expect(modalFooterCloseButton).toBeInTheDocument();
  });

  test('does not display the modal footer when modalFooter prop is false', () => {
    const onCloseMock = jest.fn();
    const { queryByText } = render(
      <Modal modalOpen={true} modalFooter={false} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalFooter = queryByText('Modal Footer');
    expect(modalFooter).toBeNull();
  });
});
