import styled from 'styled-components';


export const ControllerContent = styled.div`
  transition: transform 0.4s ease-in-out;

  textarea {
    display: block;
    margin: 1rem auto;
    font-size: 1.3em;
    text-align: justify;
    resize: none;
    font-size: 1.2em;
    padding: 10px;
    outline: none;
    border: none;
    width: calc(100% - 20px);
    max-width: 800px;
    transition: background-color 0.3s ease-in-out;
    background-color: #f5f5e6;
  }
    &:hover {
      textarea {
        background-color: lightgray;
      }
    }
`;