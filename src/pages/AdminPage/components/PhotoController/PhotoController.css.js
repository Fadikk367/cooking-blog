import styled from 'styled-components';


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