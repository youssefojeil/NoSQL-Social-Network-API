const User = require('../models/User');

// get all users
function getUsers(req, res) {
    User.find().then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

function postUser(req, res) {
    User.create(req.body)
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
};

function getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json(user)
  )
  .catch((err) => res.status(500).json(err));
}


module.exports = { getUsers, postUser, getUserById };