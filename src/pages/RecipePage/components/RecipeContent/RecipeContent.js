import React from 'react';
import { connect } from 'react-redux';

import { RecipeHeader, RecipeIngredientList, RecipeMainPhoto, RecipeParagraph } from './RecipeContent.css';
import testImage1 from 'images/test-image-1.jpg';


const RecipeContent = ({ recipe }) => {
  
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
    </>
  )
}


export default connect(state => ({ recipe: state.recipes.recipe }))(RecipeContent);