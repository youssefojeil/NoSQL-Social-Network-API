const User = require('../models/User');

// get all users
function getUsers(req, res) {
    User.find().then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};


module.exports = { getUsers };