const { Recipe } = require('../models');

exports.exampleController = async (req, res, next) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch(err) {
    next(err);
  }
}