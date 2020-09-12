const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  ingredients: {
    type: [String],
  },
  content: {
    type: String,
  },
  elements: [{}],
  comments: {
    type: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    default: []
  },
  meta: {
    type: {
      hearts: Number,
      difficulty: {
        type: String,
        enum: ['easy', 'medium', 'advanced'],
      },
      tags: {
        type: [String],
        default: [],
        enum: ['vege', 'fit', 'natural', 'meat', 'diary', 'salad', 'vegetables']
      },
    },
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);