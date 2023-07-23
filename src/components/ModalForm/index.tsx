import { useMemo } from 'react';
import isNil from 'lodash/isNil';
import Modal from '@/components/Modal';
import type { ModalFormProps } from './type';

export default function ModalForm({
  entity,
  formModal,
  children,
  modalOpen,
  onSubmit,
  onClose,
  ...props
}: ModalFormProps) {
  const modalFormId = `${entity}-modal-form`;

  const watchId = formModal.watch('id', null);

  const isCreate = useMemo(() => isNil(watchId), [watchId]);

  const titleModalForm = isCreate ? 'Create' : 'Edit';

  const closeModalForm = () => {
    formModal.reset();
    onClose && onClose();
  };

  const handleSubmitModalForm = () => {
    onSubmit?.();
  };

  const renderSubmitFormBtn = () => {
    return (
      <button onClick={handleSubmitModalForm} className='btn btn-magic min-w-[8rem] p-3' type='submit'>
        Submit
      </button>
    );
  };

  return (
    <Modal
      key={modalFormId}
      modalOpen={modalOpen}
      onClose={closeModalForm}
      titleHeader={titleModalForm}
      modalConfirmButtons={renderSubmitFormBtn()}
      {...props}
    >
      {children}
    </Modal>
  );
}
