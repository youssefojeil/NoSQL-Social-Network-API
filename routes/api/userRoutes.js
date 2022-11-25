const router = require('express').Router();
const { getUsers } = require('../../controllers/userController');

// api/users route

// get all users & post a user
router.route('/').get(getUsers);

module.exports = router;