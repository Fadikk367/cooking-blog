import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchRecipeCards } from '../../data/actions';


const HomePage = ({ recipes, fetchRecipeCards }) => {

  useEffect(() => {
    fetchRecipeCards();
  }, [fetchRecipeCards]);

  const renderedRecipes = recipes.map(recipe => (
    <Link to={`recipes/${recipe._id}`} key={recipe._id}>
      <div>
        <h3>{recipe.title}</h3>
        <p>{recipe.content}</p>
        <span>{recipe.date}</span>
      </div>
    </Link>
  ));

  return (
    <div>
      Home Page
      {renderedRecipes}
    </div>
  )
}

HomePage.propTypes = {
  recipes: PropTypes.array,
  fetchRecipeCards: PropTypes.func
}

export default connect(state => {
  return {
    recipes: state.recipes.recipeCards
  }
}, {
  fetchRecipeCards
})(HomePage);