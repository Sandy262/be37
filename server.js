var express = require('express');
var app = express()
app.set('view engine', 'pug')//it will compile automatically

app.get("/", (req,res)=>{
    res.send("Lets begin the show...... Awe!!!")
})

app.listen(4300,()=>{console.log("server running on 4300")})//idi just manaki teliyadaniki