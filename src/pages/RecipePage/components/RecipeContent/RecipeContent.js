import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { RecipeHeader, RecipeIngredientList, RecipeMainPhoto, RecipeParagraph } from './RecipeContent.css';
import { Element } from 'utils/elementTypes';
import testImage1 from 'images/test-image-1.jpg';


const RecipeContent = ({ recipe }) => {
  const [renderedRecipeElements, setRenderedRecipeElements] = useState([]);
  
  useEffect(() => {
    const renderElementList = elements => {
      return elements.map(renderRecipeElement);
    } 

    const renderRecipeElement = element => {
      let recipeElement;
      switch (element.type) {
        case Element.PARAGRAPH:
          recipeElement = <p key={String(Math.random())}>{element.text}</p>
          break;
        case Element.PHOTO:
          recipeElement = <img src={element.photo} alt={element.photoName} key={String(Math.random())}/>
          break;
        case Element.LIST:
          recipeElement = (
            <>
              <h3>{element.title}</h3>
              <ul key={String(Math.random())}>
                {element.items.map(item => <li>{item}</li>)}
              </ul>
            </>
          )
          break;
        default:
          recipeElement = null;
          break;
      }
  
      return recipeElement;
    }
    
    const renderedElements = renderElementList(recipe.elements);
    setRenderedRecipeElements(renderedElements);
  }, [recipe.elements]);

  return (
    <>
      <RecipeHeader>{recipe.title}</RecipeHeader>
      <RecipeMainPhoto src={testImage1} />
      <RecipeIngredientList>
        <h3>Lista skłądników:</h3>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </RecipeIngredientList>
      <RecipeParagraph>{recipe.content}</RecipeParagraph>
      <RecipeParagraph>{recipe.content}</RecipeParagraph>
      <RecipeParagraph>{recipe.content}</RecipeParagraph>
      {renderedRecipeElements}
    </>
  )
}


export default connect(state => ({ recipe: state.recipes.recipe }))(RecipeContent);