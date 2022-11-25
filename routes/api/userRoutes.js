const router = require('express').Router();
const { 
    getUsers, 
    postUser, 
    getUserById, 
    updateUser,
    deleteUser 
} = require('../../controllers/userController');

// api/users route

// get all users & post a user
router.route('/').get(getUsers).post(postUser);

// get user by id, /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;