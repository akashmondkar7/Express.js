import express from 'express'
const app = express();



function checkAgeRouteMiddleware(req,resp,next){
  if(!req.query.age || req.query.age<18){
    resp.send("you are not allowed to use this page")
  }else{
    next();
  }
}

function checkURLRouteMiddleware(req,resp,next){
  console.log("this request url is",req.url);

  next();
}




app.get('',(rep,resp)=>{

  resp.send("<h1>Home Page</h1>")

})

app.get('/login',checkURLRouteMiddleware,(rep,resp)=>{

  resp.send("<h1>login Page</h1>")

})

app.get('/admin',(rep,resp)=>{

  resp.send("<h1>Admin Page</h1>")

})

app.get('/user',checkAgeRouteMiddleware,checkURLRouteMiddleware,(rep,resp)=>{

  resp.send("<h1>User Page</h1>")

})

app.get('/products',checkAgeRouteMiddleware,checkURLRouteMiddleware,(rep,resp)=>{

  resp.send("<h1>products Page</h1>")

})

app.listen(3200)