// Import

import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
// routes import 
import { mobile } from './routes/mobiles.js';

// use the import 
const app =  express();
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("Testing api is Running")  
})

// use routes
app.use("/api",mobile)

// contect the mongoose 
mongoose.connect("mongodb+srv://devmutaharpickupbiz:mutahar@cluster0.nzjh9.mongodb.net/ekarts")
.then(()=> console.log("mongodb is the connected...."))



app.listen(6000,()=> console.log("APi is 6000"))