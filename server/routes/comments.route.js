const { Router } = require('express');

const { commentsController } = require('../controllers');

const router = Router();


router.post('/', commentsController.createComment);


module.exports = router;