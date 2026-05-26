import express from 'express'
import { MongoClient } from 'mongodb';
const app= express();

const dbName="school"
 const url="mongodb://localhost:27017"

const client= new MongoClient(url);


client.connect().then((connection)=>{
   const db=connection.db(dbName)

   app.get("/api",async(req,resp)=>{
         const collection =db.collection("student")
        const student = await collection.find().toArray()
        resp.send(student)
   })
})

// app.set("view engine",'ejs')


app.listen(3200)




