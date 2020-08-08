const { Router } = require('express');

const recipesController = require('../controllers/recipesController');

const router = Router();


router.get('/', recipesController.exampleController);


module.exports = router;