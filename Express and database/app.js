require('dotenv').config();

// import the express module
const express = require('express');
// create the express app
const app=  express();
//import thed ejs templae
app.set('view engine', 'ejs');
// define the port
const port = process.env.PORT
// define the listening port
// define your route
app.get('/', (req, res) => {
    res.send('Hello everyone')
})

app.get('/google', (req,res) => {
    res.send("Hello google")
});

app.get('/home',(req,res) => {
    //render the index file
    res.render("index")
});

app.listen(port, () => {
    console.log(`App is listening port ${port}`);
});

