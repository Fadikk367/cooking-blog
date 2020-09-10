import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(35px);
  }
  to {
    transform: translateY(0);
  }
`;

export const ControllerOverlay = styled.div`
  /* background: rgba(255, 255, 255, 0.4);
  display: none;
  position: absolute;
  width: 100%;
  height: 300px; */
`;

export const ControllerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 2px dashed transparent;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;

  &:hover {
    padding-bottom: 45px;
    border: 2px dashed black;

    .content {
      transform: translateY(45px);
    }
  }
  
`;

export const Controls = styled.div`
  position: absolute;
  display: flex;
  margin: 5px 0;
  margin-right: 5px;
  width: calc(100% - 5px);
  justify-content: flex-end;
  align-items: center;
  /* display: ${props => props.isDisplayed ? 'flex' : 'none'}; */
  /* animation: ${slideUp} 0.4s ease-in-out; */
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

export const ControllerContent = styled.div`
  height: 100%;
  padding: 5px;
  display: flex;
  transform: translateY(0);
  transition: transform 0.4s ease-in-out;
  &:hover {
    /* animation: ${slideDown} 0.4s ease-in-out; */
    /* transform: translateY(0); */
    /* transition: transform 0.4s ease-in-out; */
    /* margin-top: 45px; */
  }

  div {
    font-size: 1.2em;
    padding: 5px;
    background: lightgray;
    border-radius: 7px;
  }

  textarea {
    font-size: 1.2em;
    background: lightgray;
    border-radius: 7px;
    padding: 5px;
    outline: none;
    border: none;
    width: calc(100% - 5px);
  }
`;