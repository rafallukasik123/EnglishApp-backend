
const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
app.use(express.json())
let getPhrase = require('./routers/getPhrase');
app.use(getPhrase)
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
