const Main_router = require('./Main_router')
const express = require('express')
const router = express.Router();

class GetPhraseById extends Main_router{
    constructor() {
        super();
    }
    getPhraseById(){
        return router.post('/getPhraseById',async(req,res) => {
            try {
                const id =  req.body.id;
                let data =  await this.findOneById(id);
                if (data == undefined){
                    throw ("Brak elementu w bazie");
                }
                res.send({ data : data})
            } catch (error) {
                res.status(400).send({error : error})
            }
        })
    }

}
module.exports = GetPhraseById
