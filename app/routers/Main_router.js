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
        await this.db.test();
    }

}

module.exports = Main_router

