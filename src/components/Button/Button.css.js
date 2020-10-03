import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 1.1em;
  padding: 10px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  background: ${props => props.bgColor};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }

  svg {
    display: inline-block;
    width: 25px;
    padding-right: 10px;
    fill: white;
  }
`;

export const ButtonIcon = styled.img`
  display: inline-block;
  width: 25px;
  padding-right: 10px;
  /* float: left; */
`;