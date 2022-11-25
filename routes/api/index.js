const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// api route

// Setup api/users routes & api/thoughts routes middleware
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;