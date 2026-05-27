import express from 'express'
import { MongoClient } from 'mongodb';

const app = express();

app.set("view engine", 'ejs');

const dbName = "school";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

app.use(express.urlencoded({ extended: false }));

client.connect().then((connection) => {

    const db = connection.db(dbName);

    // API
    app.get("/api", async (req, resp) => {

        const collection = db.collection("student");

        const student = await collection.find().toArray();

        resp.send(student);

    });

    // UI
    app.get("/ui", async (req, resp) => {

        const collection = db.collection("student");

        const student = await collection.find().toArray();

        resp.render("student", { student });

    });

    // Form Page
    app.get("/add", (req, resp) => {

        resp.render("add-student");

    });

    // Save Data
    app.post("/add-student", async (req, resp) => {

        console.log(req.body);

        const collection = db.collection("student");

        const result = await collection.insertOne(req.body);

        console.log(result);

        resp.send("Data Saved");

    });

});

app.listen(3200, () => {
    console.log("Server Running");
});