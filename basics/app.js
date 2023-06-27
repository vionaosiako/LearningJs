const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json);

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
   //performance the calculation
   const addition = num1 + num2;
   // return a respond of the sum after calculation
   res.send(`The Sum is ${addition}`);
});
let users = [
    {
        "firstname": "Viona",
        "lastname": "Osiako",
        "age": 24
    },
    {
        "firstname": "Jonathan",
        "lastname": "Omondi",
        "age": 28
    }
]

app.get("/users", (req,res)=>{
    res.send(users)
});

app.post("/users", (req,res)=>{
    const createdUser = req.body
    const userId = uuidv4();
    const userWithId = {...createdUser, id: userId};

    users.push(userWithId);
    res.send(`User with name ${createdUser.firstname} created`)
});


app.listen(5000,()=>{
    console.log("listening on port 5000")
});