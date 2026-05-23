import express from 'express'
const app = express();

 app.get("/",(req,resp)=>{
  resp.send("home page")

  
 }).listen(4800)