import styled from 'styled-components';

export const Hint = styled.textarea`

`;

export const ControllerContent = styled.div`
  transition: transform 0.4s ease-in-out;
  position: relative;
  margin-top: 20px;
  padding: 30px 20px;

  textarea {
    padding: 30px;
    padding-left: 100px;
    border-radius: 15px;
    outline: none;
    font-size: 1.1em;
    border: none;
    /* background-color:  #ffc600; */
    background-color:  #65cf5b;
    resize: none;
    width: calc(100% - 130px);
  }

  img {
    display: block;
    position: absolute;
    width: 70px;
    top: -15px;
    border-radius: 50%;
    padding: 10px;
    background: #65cf5b;
    border-radius: 50%;
    /* filter: drop-shadow(0px -7px 8px #edf28f); */

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      background: yellow;
      width: 70px;
      height: 70px;
      box-shadow: 0px 0px 60px 21px rgba(209,224,94,1);
      border-radius: 50%;
    }
  }
`;