import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { 
  ConfirmationMessage, 
  ConfirmationButton,
  RecipeDetailRow,
} from './ConfirmRecipeDeletePopup.css';

import { deleteRecipe } from 'data/actions';

const ConfirmRecipeDeletePopup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { recipeId } = useParams();
  const recipeThumbnail = useSelector(
    state => state.recipes.recipeCards.find(
      card => card._id === recipeId
    )
  );

  const handleConrifmDeleteRecipe = () => {
    console.log(`Delete recipe: ${recipeId} request`);
    dispatch(deleteRecipe(recipeId, 'SECRET'));
    history.goBack();
  }
  return (
    <>
      <ConfirmationMessage>Are you sure you want to delete this recipe?</ConfirmationMessage>
      <RecipeDetailRow>
        <h4>Nazwa przepisu: </h4>
        {recipeThumbnail ? <span>{recipeThumbnail.title}</span> : null}
      </RecipeDetailRow>
      <RecipeDetailRow>
        <h4>Data dodtania: </h4>
        {recipeThumbnail ? <span>{recipeThumbnail.date.substring(0, 10)}</span> : null}
      </RecipeDetailRow>
      <ConfirmationButton onClick={handleConrifmDeleteRecipe}>CONFIRM</ConfirmationButton>
    </>
  )
}

export default ConfirmRecipeDeletePopup;