import express from 'express'
const app = express();



app.use(express.urlencoded({extended:false}))
 app.set('view engine','ejs')
 app.get('/add-user',(req,resp)=>{

    resp.render('addUser')
     
 });

 app.post('/submit-user',(req,resp)=>{

    
    resp.render('SubmtUser',req.body)

 })

 app.get("/users",(req,resp)=>{
   const users =['anil','akash','vikas','ajay','bruce']
   const isLogin=true;
   resp.render('users',{users:users,isLogin})
 })
app.listen(3288)
