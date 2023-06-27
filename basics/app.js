const express = require("express");
const app = express();

app.get("/sports", (req,res)=>{
    res.send("Welcome to sport arena!!!");
    console.log("Welcome to sport arena");

});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(5000,()=>{
    console.log("listening on port 5000")
});