const Main_router = require('./Main_router')
const express = require('express')
const router = express.Router();

class GetPhrase extends Main_router{
    constructor() {
        super();
    }
     getPhrases(){
        return router.get('/getPhrase',async(req,res) => {
            try {
                let test =  await this.runQuery()
                res.send({ test})
            } catch (error) {
                res.status(400).send("something goes wrong")
            }
        })
    }

}
module.exports = GetPhrase
