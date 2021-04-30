const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL);


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



    async test(){
        const query = { tests: 'test123' };
        const movie = await this.collection.findOne(query);
        console.log(movie);
        return movie;
    }
}

module.exports = Database

