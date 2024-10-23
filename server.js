var express = require('express');
var app = express()
var mongoose = require('mongoose');
var Product = require(".model/Product.model")

app.set('view engine', 'pug')//it will compile automatically

app.get("/", (req,res)=>{
    Product.find({}).then(res=>{console.log(res)})
    res.render("Home.pug")
    res.send("Hi, How are you")
})

app.listen(4300,()=>{console.log("server running on 4300")})//idi just manaki teliyadaniki