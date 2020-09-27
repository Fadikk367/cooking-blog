import styled from 'styled-components';


export const ControllerContent = styled.div`
  padding: 30px 20px;
  transition: transform 0.4s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  height: ${props => props.isImageSelected ? 'auto' : '600px'};
`;


export const ImagePreview = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: filter 0.4s ease-in-out;
`;


export const DropZone = styled.label`
  position: absolute;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  /* visibility: ${props => props.isHidden ? 'hidden' : 'visible'}; */
  justify-content: center;
  align-items: center;
  /* transform: translate(-50%, -50%); */
  /* border: 5px dashed lightskyblue; */
  border: ${props => props.isHidden ? 'none' : '5px dashed lightskyblue'};
  border-radius: 30px;
  background: white;
  background: ${props => props.isHidden ? 'transparent' : 'white'};

  img {
    width: 150px;
    height: 150px;
    fill: lightskyblue;
    visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
  }
  

  h2 {
    color: lightskyblue;
    margin: 15px 0 0 0;
    font-weight: 600;
    font-size: 1.4em;
    visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
  }

  h3 {
    color: lightskyblue;
    margin: 10px 0 0 0;
    font-weight: 400;
    font-size: 1.2em;
    visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
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