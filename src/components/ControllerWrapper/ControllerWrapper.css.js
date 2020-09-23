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
    transform: translateY(0);
  }

  &:hover {
    padding-bottom: 45px;
    border: 2px dashed black;

    .content {
      transform: translateY(45px);
    }

    & > div:first-child {
      opacity: 1;
    }
  }
`;

export default ControllerWrapper;