const router = require('express').Router();
const { 
    getThoughts,
    createThought,
    getThoughtById
} = require('../../controllers/thoughtController')

// /api/thoughts route
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:id route
router.route('/:thoughtId').get(getThoughtById);

module.exports = router;