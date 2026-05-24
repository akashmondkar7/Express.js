import express from 'express'

const app = express();


app.set('view engine','ejs')
app.get("/",(req,resp)=>{
 resp.render('home',{name:'Akash',yt:'this is akash',age:'25'})
})


app.listen(3288)