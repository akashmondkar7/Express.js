import express from 'express'
 const app = express()
  app.get('/',(res,resp)=>{
    resp.send("Home Page")


  })

  app.listen(3806)