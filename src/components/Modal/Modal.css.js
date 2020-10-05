import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.3);
  z-index: 110;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background-color: white;
  z-index: 111;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.3em;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
`;
