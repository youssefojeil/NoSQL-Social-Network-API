const express = require('express');
const routes = require('./routes');

const PORT = process.env.port || 3001;
const app = express();

// setup express middleware & routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});