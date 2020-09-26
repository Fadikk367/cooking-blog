const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  elements: [{}],
  comments: {
    type: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    default: []
  },
  meta: {
    difficulty: String,
    time: String,
    tags:  [String],
    category: String,
    description: String,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);