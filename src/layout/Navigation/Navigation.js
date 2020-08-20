import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NavContainer, NavSearchBar, NavList, NavLink } from './Navigation.css';
import { SearchBox } from './components';

import searchImg from 'svgs/search.svg';

const Navigation = ({ items=[], rightElement, recipeTitleList, searchState }) => {

  const isLoaded = useMemo(() => {
    return (searchState && Object.keys(searchState) === 0)
  }, [searchState]);

  const searchSuggestions = useMemo(() => {
    return recipeTitleList.map(recipeTitle => (
      <option key={recipeTitle._id} value={recipeTitle.title}/>
    ))
  }, [recipeTitleList])

  const linkElements = items.map(item => (
    <NavLink key={item.id} to={item.to}>
      <li>{item.text}</li>
    </NavLink>
  ))
  return (
    <NavContainer>
      {/* <NavSearchBar>
        <img src={searchImg} alt="" className="search-icon"/>
        <input type="text" name="search" placeholder="szukaj..." list="recipeTitles" autocomplete="off"/>
        <datalist id="recipeTitles">
          {searchSuggestions}
        </datalist>
      </NavSearchBar> */}
      <SearchBox />
      <NavList>
        {linkElements}
      </NavList>
      {rightElement}
    </NavContainer>
  )
}

Navigation.propTypes = {
  items: PropTypes.array,
  rightElement: PropTypes.element,
  recipeTitleList: PropTypes.array,
  searchState: PropTypes.object,
}

export default connect(state => ({
  recipeTitleList: state.search.titles,
  searchState: state.search.loadingState
}))(Navigation);