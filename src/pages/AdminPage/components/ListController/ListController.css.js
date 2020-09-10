import styled from 'styled-components';

export const ListControllerWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border: 2px dashed transparent;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;

  .content {
    transform: translateY(0);
    transition: transform 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
  }

  &:hover {
    padding-bottom: 45px;
    border: 2px dashed black;

    & > div:first-child {
      opacity: 1;
    }

    .content {
      transform: translateY(45px);
    }
  }
`;

export const ListTitle = styled.input`
  outline: none;
  padding: 10px 40px;
  margin: 0px 20px;
  border: none;
  transition: all 0.3s ease-in-out;
  background: transparent;
  border: 3px solid transparent;
  border-bottom: 3px solid grey;
  font-size: 1.3em;

  &:hover {
    border-radius: 7px;
    border: 2px solid grey;
  }
`;

export const ListItem = styled.li`
  padding: 0 20px;
  margin: 0 30px;
  border-bottom: 1px solid grey;
  font-size: 1.1em;
  display: flex;
  align-items: center;

  &::before {
    background-image: ${props => props.isInput ? 'none' : `url('svgs/check.svg')`};
    background-size: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    content: '';
    width: 30px;
    height: 40px;
    padding-left: 20px;
    margin-right: 10px;
    border-left: 2px double grey;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    margin-left: ${props => props.isInput ? '20px' : 'auto'};
    background-image: ${props => props.isInput ?  "url('svgs/plus.svg')" : "url('svgs/cross.svg')"};
    background-size: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.1);
    }
  }

  input[type="text"] {
    outline: none;
    font-size: 1em;
    padding: 3px 0;
    border: none;
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid transparent;
    
    &:hover {
      border-bottom: 2px solid grey;
    }
  }
`;






export const Controls = styled.div`
  position: absolute;
  display: flex;
  margin: 5px 0;
  opacity: 0;
  margin-right: 5px;
  transition: all 0.4s ease-in-out;
  width: calc(100% - 5px);
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  display: inline-block;
`;

export const ControlButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 7px;
  background: lightgray;
  margin-left: 7px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
`;

