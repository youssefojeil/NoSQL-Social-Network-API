const User = require('../models/User');
const Thought = require('../models/Thought');

// get all users from db 
function getUsers(req, res) {
    User.find().then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

// create new user to db 
function postUser(req, res) {
    User.create(req.body)
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
};

// get user by id from db
function getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user with that ID' })
      : res.json(user)
  )
  .catch((err) => res.status(500).json(err));
};

// update existing user by id from db
function updateUser(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body},
        { runValidators: true, new: true }
    )
        .then((user) =>
        !user
        ? res.status(404).json({ message: 'No user with this ID!' })
        : res.json({ message: 'User was updated to the following: ', user})
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
};

// delete user from db by id
function deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this ID!' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } }) 
      )
      .then((user) => {
        res.json({ message: 'The following user and their thoughts have been deleted!', user})
      })
      .catch((err) => res.status(500).json(err));
};


// add friend to user's friendlist
function addFriend(req, res) {

    console.log(req.params);
    // find user by id
    // add friend based off friend's user id
    // both values in the request params
    // use addtoset for no duplicate friends
    User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } },
          { new: true }
        )
        // conditional based off user existing or not
        // if user does not exist, return does not exist
        // else return friend added 
      .then((user) => {

        console.log(user);
        !user
        ? res
            .status(404)
            .json('User with this ID does not exist!')
        : res.json({message: `Added friend to user's friends list `, user})
      })
      
 
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
}

// delete friend from user's friendlist
function deleteFriend(req, res) {
    console.log(req.params);
    // find user by id
    // delete friend based off friend's user id
    // both values in the request params
    // use pull operator to remove friend based off id
    User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
        )
        // conditional based off user existing or not
        // if user does not exist, return does not exist
        // else return friend added 
      .then((user) => {

        console.log(user);
        !user
        ? res
            .status(404)
            .json('User with this ID does not exist!')
        : res.json({message: `Deleted friend from user's friends list `, user})
      })
      
 
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
}


module.exports = { 
    getUsers, 
    postUser, 
    getUserById, 
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend 
};