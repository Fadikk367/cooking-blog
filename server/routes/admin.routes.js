const { Router } = require('express');

const { adminController } = require('../controllers');

const router = Router();

router.get('/login', adminController.login);
router.put('/logout', adminController.logout);


module.exports = router;