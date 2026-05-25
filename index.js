import express from 'express'
import userData from './user.json' with{type:'json'}
// import { name } from 'ejs';
const app=express();


app.get("/",(req,resp)=>{
 
  resp.send(userData)
})

app.get("/user/:id",(req,resp)=>{
  const id = req.params.id
  console.log(id);
  let filteredData = userData.filter((user)=>user.id==id)
    resp.send(filteredData)

})

app.get("/username/:name",(req,resp)=>{
  const name= req.params.name
  console.log(name);
  let filteredData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase())
    resp.send(filteredData)

})
app.listen(3210);