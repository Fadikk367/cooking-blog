import React from 'react';
import PropTypes from 'prop-types';

import { NavContainer, NavSearchBar, NavList, NavLink } from './Navigation.css';

import searchImg from 'svgs/search.svg';

const Navigation = ({ items=[], rightElement }) => {

  const linkElements = items.map(item => (
    <NavLink key={item.id} to={item.to}>
      <li>{item.text}</li>
    </NavLink>
  ))
  return (
    <NavContainer>
      <NavSearchBar>
        <img src={searchImg} alt="" className="search-icon"/>
        <input type="text" name="search" placeholder="szukaj..."/>
      </NavSearchBar>
      <NavList>
        {linkElements}
      </NavList>
      {rightElement}
    </NavContainer>
  )
}

Navigation.propTypes = {
  items: PropTypes.array,
  rightElement: PropTypes.element
}

export default Navigation;