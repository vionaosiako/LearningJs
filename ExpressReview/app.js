//nmp install express
//Import the express module Express module
const express = require ('express');
//Create an express application: create an instance of the Express application by calling express function
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Server on ${port}`);
})
app.get('/api/users', (req,res) => {
    const users = ['John', 'Jane', 'Alice'];
    res.json(users);
});

app.post('/api/users', (req,res) => {
    //Create a new user based on the data in request body
    const newUser = req.body;
    //Perorm necessary operations to save the user
    //Return the created user
    res.json(newUser);
});

app.delete('/api/users/:id', (req,res) => {
    const userId = req.params.id;
    //Delete the user with the spcified ID
    //Perform necessary operations to delete the user
    res.sendStatus(204); // 204 No Content response
});

// app.put('api/users/:id', (req,res) => {
//     const userId = req
// })