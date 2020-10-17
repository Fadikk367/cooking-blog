const { Router } = require('express');

const { commentsController } = require('../controllers');

const router = Router();


router.post('/', commentsController.createComment);

router.get('/:parentId/answers', commentsController.getSubcommentsById);

router.put('/:commentId/reaction/change', commentsController.changeCommentReaction);
router.put('/:commentId/reaction/:reaction', commentsController.addCommentReaction);



module.exports = router;