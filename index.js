const express = require('express');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})