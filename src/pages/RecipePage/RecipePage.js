import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { RecipePageWrapper } from './RecipePage.css';

import { fetchRecipe } from '../../data/actions';


const RecipePage = ({ loadedRecipes, fetchRecipe, match }) => {
  const [recipe, setRecipe] = useState(null);
  const recipeId = match.params.recipeId;
  const history = useHistory();

  console.log(match);

  useEffect(() => {
    if (!!loadedRecipes[recipeId]) {
      setRecipe(loadedRecipes[recipeId])
    } else {
      fetchRecipe(recipeId);
    }
  }, [fetchRecipe, recipeId, loadedRecipes]);

  const handleGoBackClick = () => {
    history.goBack();
  }


  const renderedRecipe = recipe ? (
    <div>
      <h2>{recipe.title}</h2>
      <ul>
        {recipe.ingredients.map(ingredient => (
            <li>{ingredient}</li>
          )
        )}
      </ul>
      <p>{recipe.content}</p>
      <h3>HURRRA UDAŁO SIĘ</h3>
    </div>
  ) : null;

  return (
    <RecipePageWrapper>
      <h1>Recipe Page</h1>
      {renderedRecipe}
      <div>
        <button onClick={handleGoBackClick}>GO BACK!</button>
      </div>
    </RecipePageWrapper>
  )
}

RecipePage.propTypes = {
  fetchRecipe: PropTypes.func,
  loadedRecipes: PropTypes.object
}

export default connect(state => {
  return {
    loadedRecipes: state.recipes.loadedRecipes,
  }
}, {
  fetchRecipe
})(RecipePage);