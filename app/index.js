
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();

const getPhrase = require('./routers/getPhrase');
const addPhrase = require("./routers/addPhrase");
const passPhrase = require("./routers/passPhrase");
const approvePhrase = require("./routers/approvePhrase");
const getAllPhrases = require("./routers/getAllPhrases");

app.use(express.json())
app.use(new getPhrase().getPhrases());
app.use(new addPhrase().addPhrase());
app.use(new passPhrase().passPhrase());
app.use(new approvePhrase().approvePhrase());
app.use(new getAllPhrases().getAllPhrases());
const port = process.env.PORT


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
