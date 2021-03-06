const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL);
const ObjectId = require('mongodb').ObjectId

class Database {
    constructor() {
    }
   async initConnection(){
        try {
            await client.connect();
            this.database = client.db('english_phrases');
            this.collection = this.database.collection('phrases');
        }catch (error){
            console.error(error);
        }

    }
    async insertOne(data){
    try {
        let resault = await this.collection.insertOne(data);
       // console.log(resault);
        return resault;
    }catch (e) {
        console.error(e)
    }
    }
    async findOne(query){
        try {
            let resault = await this.collection.findOne(query);
           // console.log(resault);
            return resault;
        }catch (e) {
            console.error(e)
        }
    }

    async find(query){
        try {
            let resault = await this.collection.find(query);
            return resault;
        }catch (e) {
            console.error(e)
        }
    }

    async updateOneById(id,update){
        try {
            let _id = new ObjectId(id)
            let query = {
                "_id" : _id
            }
            let resault = await this.collection.updateOne(query,update);
            return resault;
        }catch (e) {
            console.error(e)
        }
    }
    async deleteOneById(id){
        try {
            let _id = new ObjectId(id)
            let query = {
                "_id" : _id
            }
            let resault = await this.collection.deleteOne(query);
            return resault;
        }catch (e) {
            console.error(e)
        }
    }
    async findOneById(id){
        try {
            let _id = new ObjectId(id)
            let query = {
                "_id" : _id
            }
            let resault = await this.collection.findOne(query);
            return resault;
        }catch (e) {
            console.error(e)
        }
    }

    async test(){
        const query = { tests: 'test123' };
        const movie = await this.collection.findOne(query);
        console.log(movie);
        return movie;
    }
}

module.exports = Database

