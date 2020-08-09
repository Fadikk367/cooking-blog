const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
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
        required: true
      }
    }
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);