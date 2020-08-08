import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  height: 10vh;
  background: lightyellow;
  display: flex;
  align-items: conter;
  justify-content: space-between;
  padding: 0 20px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const NavLink = styled(Link)`
  color: gray;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 1.1em;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }
`;