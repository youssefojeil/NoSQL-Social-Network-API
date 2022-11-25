const router = require('express').Router();
const { getUsers, postUser } = require('../../controllers/userController');

// api/users route

// get all users & post a user
router.route('/').get(getUsers).post(postUser);

module.exports = router;