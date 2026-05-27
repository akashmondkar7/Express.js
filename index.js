import express from 'express'
import { MongoClient } from 'mongodb';
const app= express();
app.set("view engine",'ejs')

const dbName="school"
 const url="mongodb://localhost:27017"

const client= new MongoClient(url);

app.use(express.urlencoded({extended:false}))
client.connect().then((connection)=>{
   const db=connection.db(dbName)

   app.get("/api",async(req,resp)=>{
         const collection =db.collection("student")
        const student = await collection.find().toArray()
        resp.send(student)
   })

   app.get("/ui",async(req,resp)=>{
         const collection =db.collection("student")
        const student = await collection.find().toArray()
        resp.render('student',{student})
   })

   app.get('/add',(req,resp)=>{
      resp.send(`<form method="post">
        <input type="text" name="name" placeholder="enter student name"/>
        <br/><br/>
        <input type="text" name="email" placeholder="enter student email"/>
        <br/><br/>
        <input type="text" name="age" placeholder="enter student age"/>
        <br/><br/>
        <button>Submit</button>


        </form>`)

        app.post("/add-student",async(req,resp)=>{
          console.log(req.body)
        //  const collection =db.collection("student")
        // const student = await collection.find().toArray()
        resp.send("data saved")

   })

   })





})

// app.set("view engine",'ejs')


app.listen(3200)




