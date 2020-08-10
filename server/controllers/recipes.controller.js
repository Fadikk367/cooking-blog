const { Recipe, Comment } = require('../models');
const mongoose = require('mongoose');

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
    difficulty,
    ingredients
  } = req.body;

  try {
    const recipe = new Recipe({
      title,
      ingredients,
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

exports.addComment = async (req, res, next) => {
  // const recipeId = req.query && req.query.recipeId;
  const recipeId = req.params.recipeId;
  if (!recipeId) {
    next(new Error('Recipe Id not specified!'));
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const recipe = await Recipe.findOne({ _id: recipeId }).session(session);
    if (!recipe) {
      session.endSession();
      next(new Error('Recipe with given Id does not exist'));
    }

    const comment = new Comment({
      recipeId: recipe._id,
      author: req.body.author,
      content: req.body.content
    });

    const createdComment = await comment.save({ session });

    if (!req.body.parentCommentId) {
      recipe.comments.push(createdComment._id);
      await recipe.save({ session });
    }

    await session.commitTransaction();
    session.endSession();
    res.json({ createdComment, message: 'Successfully created a comment' });
  } catch(err) {
    session.endSession();
    next(err);
  }
}

exports.getAllCommentsByRecipeId = async (req, res, next) => {
  const recipeId = req.params.recipeId;
  if (!recipeId) {
    next(new Error('Recipe Id not specified!'));
  }

  try {
    const comments = await Comment.find({ recipeId: recipeId });
    res.json(comments);
  } catch(err) {
    next(err);
  }
}