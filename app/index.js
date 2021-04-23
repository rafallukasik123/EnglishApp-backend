
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();

const getPhrase = require('./routers/getPhrase');




app.use(express.json())
app.use(new getPhrase().getPhrases());

const port = process.env.PORT


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
