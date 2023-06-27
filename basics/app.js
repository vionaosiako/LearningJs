const express = require("express");
const app = express();
//middleware
app.use(express.urlencoded({extended:true}));

app.get("/sports", (req,res)=>{
    res.send("Welcome to sport arena!!!");
    console.log("Welcome to sport arena");

});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/cal", (req,res)=>{
    res.sendFile(__dirname + "/calculator.html");
});

app.post("/cal",(req,res)=>{
   const num1 = Number(req.body.num1);
   const num2 = Number(req.body.num2);
   const addition = num1 + num2;
   res.send(`The Sum is ${addition}`);
});

app.listen(5000,()=>{
    console.log("listening on port 5000")
});