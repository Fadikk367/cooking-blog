import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, RecipeCard, HomePageContainer } from './HomePage.css';

import { fetchRecipeCards } from 'data/actions';


const HomePage = ({ recipes, fetchRecipeCards, recipesState }) => {

  useEffect(() => {
    fetchRecipeCards();
  }, [fetchRecipeCards]);

  const isLoaded = useMemo(() => {
    return (recipesState && Object.keys(recipesState) === 0)
  }, [recipesState]);

  const renderedRecipes = recipes.map(recipe => (
    <RecipeCard>
      <Link to={`recipes/${recipe._id}`} key={recipe._id}>
        <div>
          <h3>{recipe.title}</h3>
          <p>{recipe.content}</p>
          <span>{recipe.date}</span>
        </div>
      </Link>
    </RecipeCard>
  ));

  return (
    <HomePageContainer>
      <Grid>
        {renderedRecipes}
      </Grid>
    </HomePageContainer>
  )
}

HomePage.propTypes = {
  recipes: PropTypes.array,
  fetchRecipeCards: PropTypes.func
}

export default connect(state => {
  return {
    recipes: state.recipes.recipeCards,
    recipesState: state.recipes.loadingState
  }
}, {
  fetchRecipeCards
})(HomePage);