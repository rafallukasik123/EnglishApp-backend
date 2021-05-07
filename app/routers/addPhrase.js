const Main_router = require('./Main_router')
const express = require('express')
const router = express.Router();

class AddPhrase extends Main_router{
    constructor() {
        super();
    }
    addPhrase(){
        return router.post('/addPhrase',async(req,res) => {
            try {
                const english =  req.body.english;
                if (this.checkIsEmptyOrNull(english)){
                    throw("Brak tłumaczenia")
                }
                const polish =  req.body.polish;
                if (this.checkIsEmptyOrNull(polish)){
                    throw("Brak tłumaczenia")
                }
                const date = new Date();
                const isApprove = false;
                let objectToCheckCollectionContainPhrase = {
                    english : english
                }
                let document = await this.fineOne(objectToCheckCollectionContainPhrase);
                if (document != null){
                    throw (`Slowo "${english}" jest już w bazie`)
                }
                let data = {
                    english : english,
                    polish : polish,
                    date : date,
                    isApprove : isApprove
                }
                let addedDocument =  await this.insertOne(data);
                res.send({data : `Slowo "${english}" zostało dodane`})
            } catch (error) {
                res.status(400).send({error : error})
            }
        })
    }
    checkIsEmptyOrNull(phrase){
        if (phrase = '' || phrase == null){
            return true;
        }else{
            return  false;
        }
    }

    async isContainPhrase(phrase){

    }


}
module.exports = AddPhrase
