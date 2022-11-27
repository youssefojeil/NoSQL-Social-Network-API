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
// to get all thoughts and create a new thought
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts/:thoughtid route
// to get thought by id, update thought by id and delete thought by id
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);


// /api/thoughts/:thoughtId/reactions
// to create new reaction on a specific thought based off thought id
router.route('/:thoughtId/reactions').post(createReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
// to delete a reaction by using a reaction id, based off a specific thought id 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;