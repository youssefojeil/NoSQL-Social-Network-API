const Thought = require('../models/Thought');

// get all thoughts from db 
function getThoughts(req, res) {
    Thought.find().then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
};

// // create new thought to db 
// function postUser(req, res) {
//     User.create(req.body)
//     .then((dbUserData) => res.json(dbUserData))
//     .catch((err) => res.status(500).json(err));
// };

// get thought by id from db
function getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) =>
    !user
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
    // postUser, 
    getThoughtById, 
    // updateUser,
    // deleteUser 
};