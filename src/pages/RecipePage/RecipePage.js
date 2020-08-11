import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { RecipePageWrapper } from './RecipePage.css';
import { LoadingIndicator } from 'components';

import { RecipeContent, CommentsSection } from './components';

import { fetchRecipe, fetchCommentsByRecipeId } from '../../data/actions';


const RecipePage = ({ fetchRecipe, recipe, fetchCommentsByRecipeId, match, recipesState, comments, commentsState }) => {
  const recipeId = match.params.recipeId;

  const isLoaded = useMemo(() => {
    return (Object.keys(recipe) !== 0  && recipesState && Object.keys(recipesState).length === 0 && Object.keys(commentsState).length === 0)
  }, [recipesState, recipe, commentsState]);

  useEffect(() => {
    fetchRecipe(recipeId);
    fetchCommentsByRecipeId(recipeId);
  }, [fetchRecipe, recipeId, fetchCommentsByRecipeId]);

  return (
    <RecipePageWrapper>
      { isLoaded ? <RecipeContent /> : <LoadingIndicator />}
      { isLoaded ? <CommentsSection recipeId={recipe._id} commentsIds={recipe.comments}/> : <LoadingIndicator />}
    </RecipePageWrapper>
  )
}

RecipePage.propTypes = {
  fetchRecipe: PropTypes.func,
  loadedRecipes: PropTypes.object
}

export default connect(state => {
  return {
    recipesState: state.recipes.loadingState,
    recipe: state.recipes.recipe,
    commentsState: state.recipes.loadingState,
    comments: state.comments.comments,
  }
}, {
  fetchRecipe,
  fetchCommentsByRecipeId
}
)(RecipePage);