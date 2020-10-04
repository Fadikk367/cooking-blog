import styled from 'styled-components';


export const ListTitle = styled.input`
  outline: none;
  padding: 10px 20px;
  width: calc(100% - 80px);
  margin: 0px 20px;
  border: none;
  transition: background-color 0.3s ease-in-out;
  background: transparent;
  border-bottom: 1px solid black;
  font-size: 1.3em;

  &:hover {
    background-color: lightgrey;
  }
  & + ul {
    list-style-type: circle;
  }
`;

export const ListItem = styled.li`
  list-style-type: circle;
  padding: 7px 20px;
  margin: 0 30px;
  /* border-bottom: 1px solid grey; */
  font-size: 1.1em;
  display: flex;
  align-items: center;

  /* &::before {
    background-image: ${props => props.isInput ? 'none' : `url('/svgs/check.svg')`};
    background-size: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    content: '';
    width: 30px;
    height: 30px;
    margin-right: 10px;
  } */

  button {
    border: none;
    outline: none;
    background: transparent;
    margin-left: ${props => props.isInput ? '20px' : 'auto'};
    background-image: ${props => props.isInput ?  "url('/svgs/plus.svg')" : "url('/svgs/cross.svg')"};
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
    border-bottom: 2px solid black;
    margin-right: 10px;
    
    &:hover {
    background-color: lightgrey;
  }

    &:focus {
      background-color: lightgray;
    }
  }
`;


export const UnitSelect = styled.select`
  /* padding: 3px 0; */
  font-size: 1em;
  background: white;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: lightgrey;
  }

  &:focus {
    background-color: lightgray;
  }
`;

export const QuantityInput = styled.input`
  margin-right: 10px;
  padding: 3px 0;
  font-size: 1em;
  background: white;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  transition: background-color 0.3s ease-in-out;
  width: 60px;

  &:hover {
    background-color: lightgrey;
  }

  &:focus {
    background-color: lightgray;
  }
`;