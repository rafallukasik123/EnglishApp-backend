const Main_router = require('./Main_router')
const express = require('express')
const router = express.Router();

class PassPhrase extends Main_router{
    constructor() {
        super();
    }
    passPhrase(){
        return router.post('/passPhrase',async(req,res) => {
            try {
                const id =  req.query.id;
                let update = {
                    "$set": {
                           date : new Date()

                    }
                }
                let test = await this.updateOneById(id,update);
                res.send({data : "ok"})
            } catch (error) {
                res.status(400).send({error : error})
            }
        })
    }



}
module.exports = PassPhrase
