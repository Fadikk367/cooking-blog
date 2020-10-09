import styled from 'styled-components';


export const CommentFormContainer = styled.article`
  margin-bottom: 20px;

  form {
    display: flex;
    flex-direction: column;

    input[name=author] {
      width: 200px;
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      font-size: 1.3em;
      margin-bottom: 10px;
    }

    textarea[name=content] {
      padding: 5px 10px;
      height: 80px;
      border-radius: 5px;
      border: none;
      resize: none;
      margin-bottom: 10px;
      font-size: 1.3em;

      &:focus {
        background: lightblue;
        border: none;
      }
    }

    button[type=submit] {
      align-self: flex-end;
      background-color: green;
      padding: 7px 15px;
      border: none;
      border-radius: 5px;
      font-size: 1.3em;
      color: white;
    }
  }
`;