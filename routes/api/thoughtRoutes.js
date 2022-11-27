const router = require('express').Router();
const { 
    getThoughts,
    getThoughtById
} = require('../../controllers/thoughtController')

// /api/thoughts route
router.route('/').get(getThoughts)

// /api/thoughts/:id
router.route('/:thoughtId').get(getThoughtById);

module.exports = router;