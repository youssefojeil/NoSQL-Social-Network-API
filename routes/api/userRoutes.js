const router = require('express').Router();
const { 
    getUsers, 
    postUser, 
    getUserById, 
    updateUser,
    deleteUser, 
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// api/users route

// get all users & post a user
router.route('/').get(getUsers).post(postUser);

// userid, /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;