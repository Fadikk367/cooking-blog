import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { RecipePageWrapper } from './RecipePage.css';
import { CommentsSection, AddCommentForm } from './components';

import { fetchRecipe } from '../../data/actions';


const RecipePage = ({ loadedRecipes, fetchRecipe, match }) => {
  const [recipe, setRecipe] = useState(null);
  const recipeId = match.params.recipeId;
  const history = useHistory();

  useEffect(() => {
    if (!!loadedRecipes[recipeId]) {
      setRecipe(loadedRecipes[recipeId]);
    } else {
      fetchRecipe(recipeId);
    }
  }, [fetchRecipe, recipeId, loadedRecipes]);

  const handleGoBackClick = () => {
    history.goBack();
  }

  const comments = recipe ? recipe.comments : [];

  const renderedRecipe = recipe ? (
    <div>
      <h2>{recipe.title}</h2>
      <ul>
        {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          )
        )}
      </ul>
      <p>{recipe.content}</p>
    </div>
  ) : null;

  return (
    <RecipePageWrapper>
      <h1>Recipe Page</h1>
      {renderedRecipe}
      <div>
        <button onClick={handleGoBackClick}>GO BACK!</button>
      </div>
      <hr />
      {recipe ? (
        <>
          <CommentsSection commentIds={comments} recipeId={recipe._id}/>
          <AddCommentForm recipeId={recipe._id}/>
        </>
      ) : null}
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