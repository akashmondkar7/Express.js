import express from 'express'
 const app = express()
  app.get('/',(res,resp)=>{
    resp.send("Home Page")


  })

  app.get('/user',(res,resp)=>{
    resp.send("User")


  })

  app.get('/product',(res,resp)=>{
    resp.send("Product")


  })

  app.get('/about',(res,resp)=>{
    resp.send("about")


  })
  app.listen(3806)