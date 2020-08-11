const { Router } = require('express');

const { commentsController } = require('../controllers');

const router = Router();


router.post('/', commentsController.createComment);

router.get('/:parentId/answers', commentsController.getSubcommentsById);


module.exports = router;