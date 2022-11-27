const router = require('express').Router();
const { 
    getThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController')

// /api/thoughts route
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:id route
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;