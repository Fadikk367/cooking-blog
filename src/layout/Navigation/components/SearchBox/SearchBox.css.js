import styled from 'styled-components';

const borderRadius = 20;

export const SearchBoxWrapper = styled.div`
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 400px;
  height: 40px;
  z-index: 101;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 1.1em;
  background: white;
  border: none;

  &:focus {
    outline: none;
  }

  border-top-right-radius: ${borderRadius}px;
  border-bottom-right-radius: ${props => props.isSuggestionListOpen ? '0' : `${borderRadius}`}px;
  `;

export const SuggestionList = styled.ul`
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 100;
  background: white;
  position: absolute;
  top: 55px;
  list-style-type: none;
  width: 400px;
  padding-top: 10px;

  border-bottom-right-radius: ${borderRadius}px;
  border-bottom-left-radius: ${borderRadius}px;

  -webkit-box-shadow: 0px 0px 17px -1px rgba(71,71,71,1);
  -moz-box-shadow: 0px 0px 17px -1px rgba(71,71,71,1);
  box-shadow: 0px 0px 17px -1px rgba(71,71,71,1);
`;

export const SuggestionItem = styled.li`
    margin: 0 20px;
    padding: 10px 0;
    border-top: 1px solid grey;
    background: ${props => props.active ? 'grey' : 'white'};

    span.highlight {
      background: yellow;
    }
`;

export const SearchIcon = styled.div`
    background: white;
    padding: 5px 10px;
    border-top-left-radius: ${borderRadius}px;
    border-bottom-left-radius: ${props => props.isSuggestionListOpen ? '0' : `${borderRadius}`}px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 25px;
    }
`;