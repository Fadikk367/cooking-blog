const { Router } = require('express');

const { recipesController } = require('../controllers');

const router = Router();


router.get('/', recipesController.getAllRecipes);

router.get('/:recipeId', recipesController.getFullRecipe);

router.post('/', recipesController.postRecipe);

router.get('/:recipeId/comments', recipesController.getAllCommentsByRecipeId);

router.post('/:recipeId/comments', recipesController.addComment);


module.exports = router;