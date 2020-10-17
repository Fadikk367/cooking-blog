const { Router } = require('express');

const { recipesController } = require('../controllers');
const upload = require('../middlewares/upload');
const authAdmin = require('../middlewares/authAdmin');

const router = Router();


router.get('/', recipesController.getAllRecipes);

router.get('/titles', recipesController.getAllRecipeTitles);

router.get('/:recipeId', recipesController.getFullRecipe);

router.post('/', upload.array('photos'), recipesController.postRecipe);

router.delete('/:recipeId', authAdmin, recipesController.deleteRecipe);

router.get('/:recipeId/comments', recipesController.getAllCommentsByRecipeId);


router.post('/:recipeId/comments', recipesController.addComment);



module.exports = router;