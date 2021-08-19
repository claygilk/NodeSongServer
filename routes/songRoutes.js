// Require Statements
const express = require('express');
const songController = require('../controllers/songController');

// Create Router
const router = express.Router();

// Router Paths
router.get('/', songController.get_all_songs);

router.post('/', songController.post_new_song);

router.delete('/:id', songController.delete_song);

router.put('/:id', songController.update_song);

module.exports = router;