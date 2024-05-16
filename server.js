const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res)=>{
    res.send("Welcome to Cycle Count Exta ... By FAI... Chayanee ... ");
});


app.listen(8000, ()=> {
    console.log ("Server is running on port 8000");
 });
 
 