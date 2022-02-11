const db = require("../mongo")


const service = {

    // sort the products
    async product (req , res){
        try{
            const data = await db.items.find().toArray()
            // console.log(data)
            res.send(data)
            // console.log(req.user)
        }catch(error){
            console.log(error)
        } 
    },

    // sort in ascending
    async ascending (req , res){
        try{
            const data = await db.items.find({type:req.body.typess}).sort({price:1}).toArray()   
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    async allAsc (req , res){
        try{
            const data = await db.items.find({}).sort({price:1}).toArray()   
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    // sort in descending
    async descending (req , res){
        try{
            const data = await db.items.find({type:req.body.typess}).sort({price:-1}).toArray()
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    async allDsc (req , res){
        try{
            const data = await db.items.find({}).sort({price:-1}).toArray()
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    // sorting mens
    async mensSort(req , res){
        try{
            const data = await db.items.find({type:"Mens"}).toArray()
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    // sorting womens
    async womensSort (req , res){
        try{
            const data = await db.items.find({type:"Womens"}).toArray()
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    // sorting sunglasses
    async sunglassesSort (req , res){
        try{
            const data = await db.items.find({type:"Sunglasses"}).toArray()
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    // sorting mobiles
    async mobilesSort (req , res){
        try{
            const data = await db.items.find({type:"Mobiles"}).toArray()
            res.send(data)
        }catch(error){
            console.log(error)
        }
    },

    // sorting camera
    async cameraSort (req , res){
        try{
            const data = await db.items.find({type:"Camera"}).toArray()
            res.send(data)
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = service