const express = require('express')
const router = express.Router()

router.get('/getPhrase',async(req,res) => {
    // Create a new user
    try {

        let test = 'test'
        res.send({ test})
    } catch (error) {
        res.status(400).send("something goes wrong")
    }
})



module.exports = router
