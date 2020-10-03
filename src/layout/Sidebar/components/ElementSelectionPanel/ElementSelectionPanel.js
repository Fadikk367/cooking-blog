import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SelectionPanelWrapper, RecipeElementButton } from './ElementSelectionPanel.css';

import { createRecipeElementData } from '../../../../data/actions/admin.actions';
import { Element } from '../../../../utils/elementTypes';

import lightningIcon from 'svgs/lightning.svg';
import paragraphIcon from 'svgs/paragraph.svg';
import photoIcon from 'svgs/image.svg';
import headerIcon from 'svgs/type-h3.svg';
import listIcon from 'svgs/list-check.svg';


const ElementSelectionPanel = () => {
  const [elementCount, setElementCount] = useState(0);
  const recipeElements = useSelector(state => Object.values(state.admin.recipe.elements))
  const dispatch = useDispatch();

  const createRecipeElement = (type, index = recipeElements.length) => {
    console.log({ type, index });
    switch(type) {
      case Element.PARAGRAPH: {
        const elementId = `p-${elementCount}`
        dispatch(createRecipeElementData(Element.PARAGRAPH, elementId, index));
        break;
      }
      case Element.PHOTO: {
        const elementId = `img-${elementCount}`;
        dispatch(createRecipeElementData(Element.PHOTO, elementId, index));
        break;
      }
      case Element.LIST: {
        const elementId = `ul-${elementCount}`;
        dispatch(createRecipeElementData(Element.LIST, elementId, index));
        break;
      }
      case Element.HEADER: {
        const elementId = `h-${elementCount}`;
        dispatch(createRecipeElementData(Element.HEADER, elementId, index));
        break;
      }
      case Element.HINT: {
        const elementId = `hint-${elementCount}`;
        dispatch(createRecipeElementData(Element.HINT, elementId, index));
        break;
      }
      default:
        return;
    }
    setElementCount(prev => prev + 1);
  }

  return (
    <SelectionPanelWrapper>
      <h3>Dostępne elementy:</h3>
      <RecipeElementButton icon={paragraphIcon} onClick={() => createRecipeElement(Element.PARAGRAPH)}>add paragraph</RecipeElementButton>
      <RecipeElementButton icon={photoIcon} onClick={() => createRecipeElement(Element.PHOTO)}>add photo</RecipeElementButton>
      <RecipeElementButton icon={listIcon} onClick={() => createRecipeElement(Element.LIST)}>add list</RecipeElementButton>
      <RecipeElementButton icon={headerIcon} onClick={() => createRecipeElement(Element.HEADER)}>add header</RecipeElementButton>
      <RecipeElementButton icon={lightningIcon} onClick={() => createRecipeElement(Element.HINT)}>add hint</RecipeElementButton>
    </SelectionPanelWrapper>
  )
}


export default ElementSelectionPanel