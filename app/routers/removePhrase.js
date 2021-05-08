const Main_router = require('./Main_router')
const express = require('express')
const router = express.Router();

class RemovePhrase extends Main_router{
    constructor() {
        super();
    }
    removePhrase(){
        return router.post('/removePhrase',async(req,res) => {
            try {
                const id =  req.body.id;
                let response = await this.deleteOneById(id);
                res.send({data : "ok"})
            } catch (error) {
                res.status(400).send({error : error})
            }
        })
    }



}
module.exports = RemovePhrase
