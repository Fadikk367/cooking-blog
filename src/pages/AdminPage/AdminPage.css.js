import styled from 'styled-components';

export const AdminPageWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  min-height: 70vh;
  margin: 0 auto;
  flex-direction: column;
`;

export const TitleInput = styled.textarea`
  margin: 20px 40px;
  padding: 20px;
  font-size: 2em;
  text-align: center;
  resize: none;
  border: none;
  height: 50px;
  outline: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: lightgray;
  }
`;

export const RecipeElementsPlaceholder = styled.div`
  margin: 20px;
  height: 300px;
  position: relative;


  & div, div::after, div::before {
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
    height: 80px;
    width: 100%;
    position: absolute;
  }

  div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      content: 'There';
      top: calc(-100% - 30px);
      margin-bottom: 10px;
      
    }

    &::after {
      content: 'your recipe';
      bottom: calc(-100% - 30px);
      margin-top: 10px;
    }
  }
`;