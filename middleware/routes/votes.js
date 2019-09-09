const express = require('express');
const router = express.Router();

const votesController = require('../controllers/votes');

router.get('', votesController.getAll);
router.get('/:_id', votesController.get);
router.post('', votesController.create);
router.put('/:_id', votesController.update);
router.delete('/:_id', votesController.delete);

module.exports = router;