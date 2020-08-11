import styled from 'styled-components';


export const CommentFormContainer = styled.article`
  background: skyblue;
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
      height: 70px;
      border-radius: 5px;
      border: none;
      margin-bottom: 10px;
      font-size: 1.3em;

      &:focus {
        background: lightblue;
        border: none;
      }
    }

    button[type=submit] {
      align-self: flex-end;
      padding: 5px 1rem;
      border: none;
      border-radius: 5px;
      font-size: 1.3em;
      background: darkblue;
      color: white;
    }
  }
`;