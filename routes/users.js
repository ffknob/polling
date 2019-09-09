const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('', usersController.getAll);
router.get('/:_id', usersController.get);
router.post('', usersController.create);
router.put('/:_id', usersController.update);
router.delete('/:_id', usersController.delete);

module.exports = router;
