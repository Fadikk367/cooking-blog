const { Recipe } = require('../models');

exports.getAllRecipes = async (req, res, next) => {
  const { count, blocks } = req.query;
  console.log(count, blocks);

  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch(err) {
    next(err);
  }
}


exports.getFullRecipe = async (req, res, next) => {
  const { recipeId } = req.params;
  const { commentsPopulated } = req.query;

  console.log(recipeId, commentsPopulated);

  try {
    const recipe = await Recipe.findById(recipeId).populate(commentsPopulated === 'true' ? 'comments' : null);
    res.json(recipe);
  } catch(err) {
    next(err);
  }
}


exports.postRecipe = async (req, res, next) => {
  const {
    title,
    content,
    difficulty
  } = req.body;

  try {
    const recipe = new Recipe({
      title,
      content,
      meta: {
        difficulty
      }
    });

    const createdRecipe = await recipe.save();
    res.json({ createdRecipe, message: 'Successfully created new recipe' });
  } catch(err) {
    next(err);
  }
}