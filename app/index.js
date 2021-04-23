
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();

const getPhrase = require('./routers/getPhrase');
const addPhrase = require("./routers/addPhrase");




app.use(express.json())
app.use(new getPhrase().getPhrases());
app.use(new addPhrase().addPhrase());

const port = process.env.PORT


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
