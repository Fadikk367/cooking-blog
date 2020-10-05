import React from 'react';
import { connect } from 'react-redux';

import { RecipeTitle, RecipeHeader, RecipeIngredientList, RecipePhoto, RecipeParagraph } from './RecipeContent.css';
import { IngredientList } from 'components';
import { Element } from 'utils/elementTypes';


const RecipeContent = ({ recipe }) => {
  console.log(recipe);

  const renderRecipeElement = element => {
    let recipeElement;
    switch (element.type) {
      case Element.PARAGRAPH:
        recipeElement = <RecipeParagraph key={String(Math.random())}>{element.text}</RecipeParagraph>
        break;
      case Element.PHOTO:
        recipeElement = <RecipePhoto src={element.photo} alt={element.photoName} key={String(Math.random())} orientation={element.orientation}/>
        break;
      case Element.HEADER:
        recipeElement = <RecipeHeader key={String(Math.random())}>{element.text}</RecipeHeader>
        break;
      case Element.LIST:
        recipeElement = (
          <IngredientList ingredients={element.items} title={element.title}/>
        )
        break;
      default:
        recipeElement = null;
        break;
    }
  
    return recipeElement;
  }
    
  const renderedElements = recipe.elements.map(renderRecipeElement);

  return (
    <>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      {renderedElements}
    </>
  )
}


export default connect(state => ({ recipe: state.recipes.recipe }))(RecipeContent);