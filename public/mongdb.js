const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017')
.then(()=>{
    console.log("Mongodb connected");
})
.catch((e)=>{
    console.log("Failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }, 
    message:{
        type:String,
        required: true,
    }
})

const collection = new mongoose.model('collection1', LogInSchema)

module.exports=collection
