import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { 
  ConfirmationMessage, 
  ConfirmationButton 
} from './ConfirmRecipeDeletePopup.css';

const ConfirmRecipeDeletePopup = () => {
  const history = useHistory();
  const { recipeId } = useParams();

  const handleConrifmDeleteRecipe = () => {
    console.log(`Delete recipe: ${recipeId} request`);
    history.goBack();
  }
  return (
    <>
      <ConfirmationMessage>Are you sure you want to delete this recipe?</ConfirmationMessage>
      <ConfirmationButton onClick={handleConrifmDeleteRecipe}>CONFIRM</ConfirmationButton>
    </>
  )
}

export default ConfirmRecipeDeletePopup;