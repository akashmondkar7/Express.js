import express from 'express'
const app = express();


app.get('',(rep,resp)=>{

  resp.send("<h1>Home Page</h1>")

})

app.get('/login',(rep,resp)=>{

  resp.send("<h1>login Page</h1>")

})

app.get('/admin',(rep,resp)=>{

  resp.send("<h1>Admin Page</h1>")

})

app.get('/user',(rep,resp)=>{

  resp.send("<h1>User Page</h1>")

})

app.get('/products',(rep,resp)=>{

  resp.send("<h1>products Page</h1>")

})

app.listen(3200)