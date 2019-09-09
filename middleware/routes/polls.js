const express = require('express');
const router = express.Router();

const pollsController = require('../controllers/polls');

router.get('', pollsController.getAll);
router.get('/:_id', pollsController.get);
router.post('', pollsController.create);
router.put('/:_id', pollsController.update);
router.delete('/:_id', pollsController.delete);

module.exports = router;