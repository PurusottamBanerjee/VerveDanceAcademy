const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//Serving Static Files
app.use(express.static("static"));
app.use(express.urlencoded());

//Initializing PUG engine
app.set("view engine","pug"); 
app.set("views",path.join(__dirname,"view")); 

//Endpoints
app.get("/",(req, res)=>{
        res.status(200).render('home.pug')
})

app.get("/contact",(req,res)=>{
        res.status(200).render("contact.pug");
})

app.get("/about",(req,res)=>{
    res.status(200).render("about.pug")
})

app.get("/services",(req,res)=>{
    res.status(200).render("services.pug")
})

//Listening to the server
app.listen(port,(req,res)=>{
    console.log("Your app has been launched in the port: "+port)
})