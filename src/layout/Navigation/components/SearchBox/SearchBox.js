import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { SearchBoxWrapper, SearchBar, SearchIcon, SearchInput, SuggestionList, SuggestionItem } from './SearchBox.css';

import searchImg from 'svgs/search.svg';
import recipesReducer from '../../../../data/reducers/recipes.reducer';


const SearchBox = ({ recipeTitles }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSuggestionListOpen, setIsSuggestionListOpen] = useState(false);
  const [activeSuggestionItemIdx, setActiveSuggestionItemIdx] = useState(0);

  const handleSuggestionSelection = e => {
    const code = e.keyCode;

    if (code === 38) {
      let nextActiveIndex = activeSuggestionItemIdx;

      setActiveSuggestionItemIdx(prev => { 
        if (prev <= 0) nextActiveIndex = 0;
        else nextActiveIndex = prev - 1;
        return nextActiveIndex;
      });

      setSearchValue(recipeTitles[nextActiveIndex].title);
    } else if (code === 40) {
      let nextActiveIndex = activeSuggestionItemIdx;
      
      setActiveSuggestionItemIdx(prev => {
        if (prev >= recipeTitles.length - 1) nextActiveIndex = recipeTitles.length - 1;
        else nextActiveIndex =  prev + 1
        return nextActiveIndex;
      });

      setSearchValue(recipeTitles[nextActiveIndex].title);
    } else if (code === 13) {
      console.log('proceed searching...');
    }

  }

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value);


  }

  const renderedMatchedSuggestions = useMemo(() => {
    const searchRegExp = new RegExp(searchValue, 'gi');

    const matchedSuggestions = recipeTitles.filter(recipe => searchRegExp.test(recipe.title));

    return matchedSuggestions.map((suggestion, idx) => {
      const parts = suggestion.title.split(searchValue);
      parts.splice(1, 0, <span className="highlight">{searchValue}</span>);

      return (
        <SuggestionItem 
          key={suggestion._id} 
          active={activeSuggestionItemIdx === idx}
        >
          {parts}
        </SuggestionItem>
      )}
    )

  }, [searchValue, recipeTitles, activeSuggestionItemIdx]);

  const suggestionOptions = useMemo(() => recipeTitles.map((item, idx) => (
    <SuggestionItem 
      key={item._id} 
      active={activeSuggestionItemIdx === idx}
    >
      {item.title}
    </SuggestionItem>
  )), [recipeTitles, activeSuggestionItemIdx]);

  return (
    <SearchBoxWrapper>
      
      <SearchBar>
        <SearchIcon isSuggestionListOpen={isSuggestionListOpen}> 
          <img src={searchImg} alt=""/>
        </SearchIcon>
        <SearchInput 
          type="text" 
          placeholder="search recipes..." 
          value={searchValue}
          onChange={handleSearchInputChange}
          onFocus={() => setIsSuggestionListOpen(true)}
          onBlur={() => setIsSuggestionListOpen(false)}
          onSubmit={() => console.log('MADAFAKAAA')}
          onKeyDown={handleSuggestionSelection}
          isSuggestionListOpen={isSuggestionListOpen} 
        />
      </SearchBar>
      <SuggestionList isOpen={isSuggestionListOpen}> 
        {renderedMatchedSuggestions}
      </SuggestionList>
    </SearchBoxWrapper>
  )
}


export default connect(state => ({
  recipeTitles: state.search.titles
}))(SearchBox);