import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin: 2rem 8rem;
`;


export const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 0 0 0.5rem 0.5rem;

  button {
    /* padding: 5px; */
    cursor: pointer;
    outline: none;
    border: 1px solid black;
    margin: 0 10px;
    background: transparent;
  }

  span {
    display: inline-block;
    width: 15px;
    text-align: center;
  }
`;


export const ListTitle = styled.h3`
  margin: 0;
  font-family: 'Kalam', cursive;
  font-size: 1.8em;
  font-weight: 500;
  letter-spacing: 1px;
`;


export const List = styled.ul`
  list-style-type: circle;
  padding: 0.5rem 2rem;
  font-family: 'Kalam', cursive;
  font-size: 1.5em;
`;


export const ListItem = styled.li`
  padding: 0.3rem 0;
`;