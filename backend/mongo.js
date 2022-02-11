
const{MongoClient} = require("mongodb");



const client = new MongoClient(process.env.MONGODB_URL);

module.exports = {
    db: null,
    items: null , 
    userData: null,
    orders:null,
    async connect(){
        await client.connect()
        console.log("connected to" , process.env.MONGODB_URL)
        this.db = client.db(process.env.MONGODB_NAME)
        console.log("connected to " , process.env.MONGODB_NAME)
        this.items = this.db.collection("items")
        this.userData = this.db.collection("userData")
        this.orders = this.db.collection("orders")
    }
}