const database = require ('../../database/Database');


class Main_router {
constructor() {
    this.db = new database();
    this.initDatabase();
}
    async initDatabase(){
        await this.db.initConnection();
    }

    async runQuery(){
       let res = await this.db.test();
       return res;
    }
    async insertOne(data){
        let res = await this.db.insertOne(data);
        return res;
    }
}

module.exports = Main_router

