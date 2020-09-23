import styled from 'styled-components';


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