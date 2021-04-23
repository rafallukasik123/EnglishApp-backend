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
                const english =  req.query.english;
                if (this.checkIsEmptyOrNull(english)){
                    throw("Brak tłumaczenia")
                }
                const polish =  req.query.polish;
                if (this.checkIsEmptyOrNull(polish)){
                    throw("Brak tłumaczenia")
                }
                const date = new Date();
                const isApprove = false;
                let data = {
                    english : english,
                    polish : polish,
                    date : date,
                    isApprove : isApprove
                }
                let test =  await this.insertOne(data);
                res.send({data : 'ok'})
            } catch (error) {
                res.status(400).send("something goes wrong")
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


}
module.exports = AddPhrase
