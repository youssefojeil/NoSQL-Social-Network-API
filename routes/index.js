const router = require('express').Router();
const apiRoutes = require('./api');

// home route

// setup api Routes middleware
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Wrong Route!'));

module.exports = router;