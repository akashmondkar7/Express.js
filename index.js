import express from 'express'
import { MongoClient } from 'mongodb';
const app= express();

const dbName="school"
 const url="mongodb://localhost:27017"

const client= new MongoClient(url);


// async function dbConnection(){
  
// }

// dbConnection();


app.get("/",async(req,resp)=>{
   await client.connect()
   const db=client.db(dbName);
   const collection= db.collection('student')

   const result=await collection.find().toArray()
   console.log(result)
   resp.send("Home page")
})

app.listen(3200)




