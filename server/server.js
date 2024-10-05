var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());
module.exports = app

var CONNECTION_STRING = "mongodb+srv://nben7890:57NOFNe!@cluster0.pd9u7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DATABASE_NAME = "Magic";
var database;

app.listen(5038, () => {
    console.log('Server is listening on port 5038');

    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error('MONGO CONNECTION FAILED', error);
            return;
        }
        database = client.db(DATABASE_NAME);
        console.log('MONGO CONNECTION SUCCESSFUL');
    });
});


// Users collection

// Get all Users
app.get("/Users/GetAll", async (request, response) => {
    const userList = await database.collection('Users').find({}).toArray()
    return response.status(200).json(userList)
});

// Get User
app.get("/Users/GetUser", async (request, response) => {
    console.log("GET USER CALLED")
    const user = await database.collection("Users").findOne({
        username: request.query.username
    })
    return response.status(200).json(user);
})

// Create New User
app.get("/Users/CreateUser", async (request, response) => {
    console.log("")
    await database.collection('Users').insertOne({
        username: request.query.username,
        password: request.query.password
    })
    await response.json(request.query.username + " ADDED")
})

// Delete User
app.get("/Users/DeleteUser", async (request, response) => {
    await database.collection('Users').deleteOne({
        username: request.query.username
    })
    await response.json(request.query.username + " DELETED")
})