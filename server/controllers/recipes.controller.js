const { Recipe, Comment } = require('../models');
const mongoose = require('mongoose');
const { element } = require('prop-types');

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
  const photos = req.files;
  console.log({ photos });
  const elements =  JSON.parse(req.body.elements);
  for (let element of elements) {
    if (element.type === 'PHOTO') {
      const correspondingPhoto = photos.find(photo => photo.originalname === element.photoName);
      if (!!correspondingPhoto)
        element.photo = correspondingPhoto.location
      else console.log('photo not found');
    }
  }
  console.log(elements);

  try {
    const recipe = new Recipe({
      title,
      ingredients,
      content,
      elements,
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
  const parentCommentId = req.body.parentCommentId;
  console.log({ parentCommentId, recipeId });

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

    if (!parentCommentId) {
      recipe.comments.push(comment._id);
      await recipe.save({ session });
    } else {
      const parentComment = await Comment.findOne({ _id: parentCommentId }).session(session);

      if (!parentComment) {
        throw new Error('Comment with given Id does not exist');
      }

      comment.parentCommentId = parentComment._id;
      parentComment.answers.push(comment._id);
      await parentComment.save({ session });
    }

    const createdComment = await comment.save({ session });

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
    const comments = await Comment.find({ recipeId: recipeId, parentCommentId: null });
    res.json(comments);
  } catch(err) {
    next(err);
  }
}


exports.getAllRecipeTitles = async (req, res ,next) => {
  try {
    const recipeTitles = await Recipe.find({}, { title: 1 });
    res.json(recipeTitles);
  } catch(err) {
    next(err);
  }
}