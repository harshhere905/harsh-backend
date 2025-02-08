import dotenv from 'dotenv';
dotenv.config({path:'./env'});
import connectdb from "./db/index.js";
//require('dotenv').config({path: './env'});
connectdb()
.then(()=>{
   app.listen(process.env.PORT || 8000 , ()=>{
      console.log(`server is running on port ${process.env.PORT}`);
   })
})
.catch((err)=>{
   console.log(`database connection failed!!`,err);
})

















// import express from "express";
// import { DB_NAME } from "./constants";
// const app=express();
// const port=process.env.PORT || 4000;
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.listen(port ,()=>{
//             console.log(`server is running on ${port} port`);
//         })
//     } catch (error) {
//         console.error("ERROR",error);
//         throw error;
//     }
// })()