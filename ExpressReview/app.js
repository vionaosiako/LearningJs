//nmp install express
//Import the express module Express module
const express = require ('express');
//Create an express application: create an instance of the Express application by calling express function
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Server on ${port}`);
})
