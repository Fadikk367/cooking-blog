import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchRecipes } from '../../data/actions';


const HomePage = ({ recipes, fetchRecipes }) => {

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const renderedRecipes = recipes.map(recipe => (
    <div key={recipe._id}>
      <h3>{recipe.title}</h3>
      <p>{recipe.content}</p>
      <span>{recipe.date}</span>
    </div>
  ));

  console.log(renderedRecipes);

  return (
    <div>
      Home Page
      {renderedRecipes}
    </div>
  )
}

HomePage.propTypes = {
  recipes: PropTypes.array,
  fetchRecipes: PropTypes.func
}

export default connect(state => {
  return {
    recipes: state.recipes.recipes
  }
}, {
  fetchRecipes
})(HomePage);