const router = require('express').Router();
const { 
    getThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController')

// /api/thoughts route
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:thoughtid route
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);


// /api/thoughts/:thoughtid/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;