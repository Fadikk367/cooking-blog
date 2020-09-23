import styled from 'styled-components';

export const ControlsContainer = styled.div`
  position: absolute;
  display: flex;
  margin: 5px 0;
  opacity: 0;
  margin-right: 5px;
  transition: all 0.4s ease-in-out;
  width: calc(100% - 5px);
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  display: inline-block;
`;

export const ControlButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 7px;
  background: lightgray;
  margin-left: 7px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
`;