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
                let initQuery = {
                    isApprove : false
                }
                let data =  await this.find(initQuery);
                let currentDate = new Date().toISOString().slice(0, 10);
                let fullArray = await data.toArray()

                 let filteredArray = fullArray.filter(el => {
                    return el.date.toISOString().slice(0, 10) < currentDate;
                })
                if (filteredArray.length == 0){
                    throw ("Nie masz już fraz do powtórzenia na dziś")
                }
                let phrase =  filteredArray[Math.floor(Math.random()*filteredArray.length)];
                res.send({ data : phrase})
            } catch (error) {
                res.status(400).send({error : error})
            }
        })
    }

}
module.exports = GetPhrase
