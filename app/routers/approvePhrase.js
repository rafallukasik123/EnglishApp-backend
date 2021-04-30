const Main_router = require('./Main_router')
const express = require('express')
const router = express.Router();

class ApprovePhrase extends Main_router{
    constructor() {
        super();
    }
    approvePhrase(){
        return router.post('/approvePhrase',async(req,res) => {
            try {
                const id =  req.query.id;
                let update = {
                    "$set": {
                        isApprove : true

                    }
                }
                let response = await this.updateOneById(id,update);
                res.send({data : "ok"})
            } catch (error) {
                res.status(400).send({error : error})
            }
        })
    }



}
module.exports = ApprovePhrase
