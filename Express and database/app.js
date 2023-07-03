// import the express module
const express = require('express');
// create the express app
const app=  express();
// define the port
const port = 5000
// define the listening port
// define your route
app.get('/', (req, res) => {
    res.send('Hello everyone')
})
app.listen(port, () => {
    console.log(`App is listening port ${port}`);
})

