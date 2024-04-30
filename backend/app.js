const mongoose = require('mongoose');
const connectToDatabase =async()=>{
    mongoose.connect('mongodb://localhost:27017/authenticate').then(()=>{
        console.log("connected to database");
    }).catch(()=>{
        console.log("unsuccessful connection");
    })
}
module.exports=connectToDatabase;