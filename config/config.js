
const mongoose = require('mongoose');

const createDatabase = ()=>{

mongoose.connect("mongodb://localhost:27017/sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log(err)
})
}

module.exports = createDatabase;