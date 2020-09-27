import styled from 'styled-components';


export const ControllerContent = styled.div`
  padding: 30px 20px;
  transition: transform 0.4s ease-in-out;

  textarea {
    resize: none;
    font-size: 1.2em;
    padding: 10px;
    outline: none;
    border: none;
    width: calc(100% - 20px);
    transition: background-color 0.3s ease-in-out;
  }
    &:hover {
      textarea {
        background-color: lightgray;
      }
    }
`;