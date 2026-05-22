import express from 'express'
 const app = express()


function checkRoute(req,resp,next){
  console.log(req.url);
  next();
}
 app.use(checkRoute);
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