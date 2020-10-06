import styled, { keyframes } from 'styled-components';

const popUp = keyframes`
  from {
    opacity: 0.4;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ModalWrapper = styled.div`
  transition: background-color 0.3s ease-in-out;
  background-color: rgba(0,0,0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110 !important;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 360px;
  height: 500px;
  background-color: white;
  box-shadow: 0px 0px 33px 9px rgba(0,0,0,1);

  display: flex;
  padding: 40px;
  border-radius: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  font-size: 1.3em;
  animation: ${popUp} 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  font-weight: 600;
  border: none;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 3px;
  outline: none;
  cursor: pointer;
`;
