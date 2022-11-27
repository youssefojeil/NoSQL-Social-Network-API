const Thought = require('../models/Thought');
const User = require('../models/User');

// get all thoughts from db 
function getThoughts(req, res) {
    Thought.find().then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
};

// create new thought
function  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
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
    Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No Thought found with that ID' })
      : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
};

// update existing user by id from db
// function updateUser(req, res) {
//     User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $set: req.body},
//         { runValidators: true, new: true }
//     )
//         .then((user) =>
//         !user
//         ? res.status(404).json({ message: 'No user with this ID!' })
//         : res.json({ message: 'User was updated to the following: ', user})
//     )
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// };

// delete user from db by id
// function deleteUser(req, res) {
//     User.findOneAndRemove({ _id: req.params.userId })
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: 'No user with this ID!' })
//           : res.json({ message: 'The following user was deleted!', user})
//       )
//       .catch((err) => res.status(500).json(err));
// }


module.exports = { 
    getThoughts, 
    createThought, 
    getThoughtById, 
    // updateUser,
    // deleteUser 
};