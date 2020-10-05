import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';

import { Grid, HomePageContainer,  } from '../HomePage/HomePage.css';
import { ConfirmRecipeDeletePopup } from './components';
import { Modal, RecipeCard, LoadingIndicator } from 'components';

import { fetchRecipeCards, fetchRecipeTitles } from 'data/actions';


const ManageRecipesPage = ({ recipes, fetchRecipeCards, recipesState, fetchRecipeTitles }) => {
  useEffect(() => {
    fetchRecipeCards();
    fetchRecipeTitles();
  }, [fetchRecipeCards, fetchRecipeTitles]);

  const isLoaded = useMemo(() => {
    return (recipesState && Object.keys(recipesState).length === 0)
  }, [recipesState]);

  const renderedRecipes = recipes.map(recipe => (
    <Link to={`/recipes/${recipe._id}`} key={recipe._id}>
      <RecipeCard {...recipe} />
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
        <Route path='/admin/recipes/:recipeId/delete' exact>
          {console.log('im in modal!!!')}
          <Modal>
            <ConfirmRecipeDeletePopup />
          </Modal>
        </Route>
      </Switch>
    </HomePageContainer>
  )
}


ManageRecipesPage.propTypes = {
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
})(ManageRecipesPage);