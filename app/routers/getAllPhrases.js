const Main_router = require('./Main_router')
const express = require('express')
const router = express.Router();

class GetAllPhrases extends Main_router{
    constructor() {
        super();
    }
    getAllPhrases(){
        return router.get('/GetAllPhrases',async(req,res) => {
            try {
                let initQuery = {}
                let data =  await this.find(initQuery);
                let fullArray = await data.toArray()
                if (fullArray.length == 0){
                    throw ("Brak fraz")
                }
                res.send({ data : fullArray})
            } catch (error) {
                res.status(400).send({error : error})
            }
        })
    }

}
module.exports = GetAllPhrases
