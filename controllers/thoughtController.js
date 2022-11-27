const Thought = require('../models/Thought');
const User = require('../models/User');

// get all thoughts from db 
function getThoughts(req, res) {
    Thought.find().then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
};

// create new thought
function  createThought(req, res) {
    // create new thought 
    Thought.create(req.body)
      .then((thought) => {
        // find user by id and add the new thought's id to current user
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'thought created, but no users found with this ID' })
          : res.json({ message: 'thought created' })
      )
      .catch((err) => {
        console.error(err);
      });
};

// get thought by id from db
function getThoughtById(req, res) {
    // find thought based off thought id param
    Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No Thought found with that ID' })
      : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
};

// update existing thought by id from db
function updateThought(req, res) {
    // find thought by id and set thought text to new thought
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body},
        { runValidators: true, new: true }
    )
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No thought found with this ID!' })
        : res.json({ message: 'Thought was updated to the following: ', thought})
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
};

// delete thought from db by id
function deleteThought(req, res) {
    // find thought by thought id params and delete
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought found with this ID!' })
          : res.json({ message: 'The following thought was deleted!', thought})
      )
      .catch((err) => res.status(500).json(err));
}

// create reaction
function createReaction(req, res) {

}

// delete reaction
function deleteReaction(req, res) {

}


module.exports = { 
    getThoughts, 
    createThought, 
    getThoughtById, 
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction 
};