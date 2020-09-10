import styled from 'styled-components';


export const ControllerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 2px dashed transparent;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;

  .content {
    transition: all 0.4s ease-in-out;
    transform: translateY(0);
  }

  &:hover {
    padding-bottom: 45px;
    border: 2px dashed black;

    .content {
      transform: translateY(45px);
    }

    & > div:first-child {
      opacity: 1;
    }
  }
`;

export const ControllerContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 600px;
  height: 600px;
  background: orange;
  border-radius: 7px;
`;


export const Controls = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  margin: 5px 0;
  margin-right: 5px;
  width: calc(100% - 5px);
  justify-content: flex-end;
  align-items: center;
  transition: all 0.4s ease-in-out;
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

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(50%);
  }
`;


export const DropZone = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
  justify-content: center;
  align-items: center;
  /* transform: translate(-50%, -50%); */
  border: 5px dashed lightskyblue;
  border-radius: 30px;
  background: white;

  img {
    width: 150px;
    height: 150px;
    fill: lightskyblue;
  }
  

  h2 {
    color: lightskyblue;
    margin: 15px 0 0 0;
    font-weight: 600;
    font-size: 1.4em;
  }

  h3 {
    color: lightskyblue;
    margin: 10px 0 0 0;
    font-weight: 400;
    font-size: 1.2em;
  }
  

  input[type="file"] {
    /* visibility: hidden; */
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* border-radius: 50%; */
  }
`;

export const Preview = styled.div`
  
`;