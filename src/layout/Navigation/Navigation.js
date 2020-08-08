import React from 'react';
import PropTypes from 'prop-types';

import { NavContainer,  NavList, NavLink } from './Navigation.css';

const Navigation = ({ items=[], rightElement }) => {

  const linkElements = items.map(item => (
    <NavLink key={item.id} to={item.to}>{item.text}</NavLink>
  ))
  return (
    <NavContainer>
      Nawigacja
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