const express = require('express');
const bodyparser = require('body-parser')
const createDatabase = require('./config/config')
const app = express();

app.use(bodyparser.urlencoded({ extended:false}));
app.use(express.json());

createDatabase();

const Product = require('./productRoute/productRoute')

app.use("/api/v1",Product)

app.listen(1000,(err,res)=>{
    console.log("server is working")
})