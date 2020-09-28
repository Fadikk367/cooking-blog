const { Comment, Recipe } = require('../models');
const mongoose = require('mongoose');

exports.createComment = async (req, res, next) => {
  const recipeId = req.query && req.query.recipeId;
  if (!recipeId) {
    next(new Error('Recipe Id not specified!'));
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const recipe = await (await Recipe.findById(recipeId)).session(session);
    if (!recipe) {
      session.endSession();
      next(new Error('Recipe with given Id does not exist'));
    }

    const comment = new Comment({
      recipeId: recipe._id,
      author: req.body.author,
      content: req.body.content
    });

    const createdComment = await comment.save().session(session);

    recipe.comments.push(createdComment._id);
    await recipe.save().session(session);

    session.commitTransaction();
    session.endSession();
    res.json({ createdComment, message: 'Successfully created a comment' });
  } catch(err) {
    session.endSession();
    next(err);
  }
}

exports.getSubcommentsById = async (req, res, next) => {
  const parentId = req.params.parentId;
  if (!parentId) {
    next(new Error('Comment with such Id does not exist!'));
  }

  try {
    const comments = await Comment.find({ parentCommentId: parentId });
    res.json(comments);
  } catch(err) {
    next(err);
  }
}

exports.addCommentReaction = async (req, res, next) => {
  const commentId = req.params.commentId;
  const reaction = req.params.reaction;

  console.log({ commentId, reaction });

  if (!commentId || !reaction) {
    next(new Error('Comment with such Id does not exist or reaction is missing!'));
  }

  try {
    const comment = await Comment.findOne({ _id: commentId });
    comment.reactions[reaction] += 1;
    await comment.save();
    res.json({ ok: true });
  } catch(err) {
    next(err);
  }
}


exports.changeCommentReaction = async (req, res, next) => {
  const commentId = req.params.commentId;
  const previousReaction = req.query.from;
  const newReaction = req.query.to;

  console.log({ commentId, previousReaction, newReaction });

  if (!commentId) {
    next(new Error('Comment with such Id does not exist!'));
  }

  try {
    const comment = await Comment.findOne({ _id: commentId });
    comment.reactions[previousReaction] -= 1;
    comment.reactions[newReaction] += 1;
    await comment.save();
    res.json({ ok: true });
  } catch(err) {
    next(err);
  }
}