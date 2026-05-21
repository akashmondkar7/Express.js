// const express = require('express');

import express from 'express'

const app = express();


app.get("",(req,resp)=>{
   resp.send("<h1>Home page</h1>")
})


app.get("/about",(req,resp)=>{
   resp.send("<h1>about page</h1>")
})





app.listen(3400);