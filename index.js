import express from 'express'
const app = express();


function ageCheck(req,resp,next){
  if(!req.query.age || req.query.age<18){
      resp.send("you can not acces this page")
  }
}

 app.get("/",(req,resp)=>{
  resp.send("home page")
})

 app.get("/admin",(req,resp)=>{
  resp.send("about page")
})

 app.get("/user",(req,resp)=>{
  resp.send("user page")
})

 app.get("/login",(req,resp)=>{
  resp.send("login page")
}).listen(4800)