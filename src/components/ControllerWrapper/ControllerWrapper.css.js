import styled from 'styled-components';

const ControllerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 2px dashed transparent;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;

  .content {
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    padding-top: 45px;
    border: 2px dashed black;

    & > div:first-child {
      opacity: 1;
    }
  }
`;

export default ControllerWrapper;