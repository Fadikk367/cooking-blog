import styled from 'styled-components';


export const ControllerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 2px dashed transparent;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;
`;

export const ControllerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 600px;
  height: 600px;
  background: orange;
  border-radius: 7px;

  img {
    width: 100%;
    height: 100%;
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
`;