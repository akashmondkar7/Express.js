import express from 'express'
// import morgan from 'morgan'
const app= express();

// app.use(morgan('dev'))
app.get("/",(req,resp)=>{
  resp.send("Home page ")
})


app.get("/users",(req,resp)=>{
  resp.send("users page ")
})

app.get("/errors",(req,resp)=>{
 const error = new Error('')
 error.status=404;
 next(error);
})

// app.get("/wait",(req,resp)=>{
//   setTimeout(()=>{
//     resp.send("result after 1 sec")
//   },1000);
// })
// function errorsHandling
app.use((error,req,resp,next)=>{
  resp.status(error.status || 500).send("Try after some time")
})
app.listen(4800)