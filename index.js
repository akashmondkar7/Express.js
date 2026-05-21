// const express = require('express');

import express from 'express'
import home from './pages/home.js';

const app = express();



app.get("",(req,resp)=>{
   resp.send(home())
})


// app.get("/about",(req,resp)=>{
//    resp.send("<h1>about page</h1>")
// })





app.listen(3400);