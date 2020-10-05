import React, { useEffect, useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, HomePageContainer, Link } from './HomePage.css';
import { LoadingIndicator, Modal, RecipeCard } from 'components';

import { fetchRecipeCards, fetchRecipeTitles } from 'data/actions';


const HomePage = ({ recipes, fetchRecipeCards, recipesState, fetchRecipeTitles }) => {

  useEffect(() => {
    fetchRecipeCards();
    fetchRecipeTitles();
  }, [fetchRecipeCards, fetchRecipeTitles]);

  const isLoaded = useMemo(() => {
    return (recipesState && Object.keys(recipesState).length === 0)
  }, [recipesState]);

  const renderedRecipes = recipes.map(recipe => (
    <Link to={`recipes/${recipe._id}`} key={recipe._id}>
      <RecipeCard {...recipe}/>
    </Link>
    ));


  return (
    <HomePageContainer>
      {isLoaded 
      ? (
        <Grid>
        {renderedRecipes}
        </Grid>
      ) : (
      <LoadingIndicator />
      )}
      <Switch>
        <Route path='admin/recipes/:recipeId/delete'>
          <Modal>

          </Modal>
        </Route>
      </Switch>
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
  fetchRecipeCards,
  fetchRecipeTitles
})(HomePage);