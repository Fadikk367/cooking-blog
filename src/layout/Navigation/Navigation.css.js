import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 10vh;
  background: #b3b3b3;
  display: flex;
  align-items: conter;
  justify-content: space-between;
  padding: 0 20px;
`;

export const NavSearchBar = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  img.search-icon {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 5px;
  }

  input[name=search] {
    padding: 5px;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
  }

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
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  li {
    padding: 5px 10px;
    border-radius: 10px;

    &:hover {
      background: lightgray;
    }
  }
`;