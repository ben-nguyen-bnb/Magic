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
app.get("/Users", (request, response) => {
    database.collection('Users').find({}).toArray((error, result) => {
        response.send(result);
    });
});