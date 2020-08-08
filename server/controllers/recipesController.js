const { Recipe } = require('../models');

exports.exampleController = async (req, res, next) => {
  try {
    const recipe = new Recipe({
      title: 'Nowy przepis',
      content: 'To jest mój nowy przepis, Pierwszym krokiem jest...'
    });
    const createdRecipe = await recipe.save();
    res.json(createdRecipe);

  } catch(err) {
    next(err);
  }
}