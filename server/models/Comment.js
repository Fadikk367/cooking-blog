const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  recipeId: {
    type: mongoose.Types.ObjectId,
    ref: 'Recipe',
    require: true
  },
  parentCommentId: {
    type: mongoose.Types.ObjectId,
    ref: 'Comment',
    default: null
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  reactions: {
    likes: { type: Number, default: 0 },
    hearts: { type: Number, default: 0 },
    wows: { type: Number, default: 0 },
  },
  answers: {
    type: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    default: []
  }
});

module.exports = mongoose.model('Comment', CommentSchema);