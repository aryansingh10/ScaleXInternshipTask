const express = require('express');
const {
  getPairs,
  getPairById,
  createPair,
  updatePair,
  deletePair,
} = require('../controllers/pairController.js');

const router = express.Router();

router.get('/', getPairs);
router.get('/:id', getPairById);
router.post('/', createPair);
router.put('/:id', updatePair);
router.delete('/:id', deletePair);

module.exports = router;
