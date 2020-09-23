import styled from 'styled-components';


export const ControllerContent = styled.div`
  padding: 5px;
  transform: translateY(0);
  transition: transform 0.4s ease-in-out;

  div {
    font-size: 1.2em;
    padding: 5px;
    background: lightgray;
    border-radius: 7px;
  }

  textarea {
    resize: none;
    font-size: 1.2em;
    background: lightgray;
    border-radius: 7px;
    padding: 5px;
    outline: none;
    border: none;
    width: calc(100% - 5px);
  }
`;