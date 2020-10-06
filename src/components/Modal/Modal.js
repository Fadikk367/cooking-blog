import React from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import { ModalWrapper, ModalContent, CloseButton } from './Modal.css';

const Modal = ({ children }) => {
  const history = useHistory();

  const handleCloseModal = e => {
    e.stopPropagation();

    history.goBack();
  }
  return createPortal(
    <ModalWrapper onClick={handleCloseModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('modal')
  )
}

export default Modal;