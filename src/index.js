// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";
// import {app} from './app.js'


dotenv.config({
    path:'./env'
})
const app = express();
// error handling middleware:
app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(500).send("Something broke!");
});
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })

})
.catch((err) => {
    console.log("Mongodb connection failed !!! ", err);
})











// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
// import express from "express"
// const app = express()
// ;(async()=>{
//     try{
//        await  mongoose.coonect(`${process.env.MONGODB_URI }/${DB_NAME}`)
//        app.on("error",(error)=>{
//            console.log("Error:",error);
//            throw error
//        })
//        app.listen(process.env.PORT,()=>{
//            console.log(`App is listening on port ${process.env.PORT}`);
//        })
//     }catch(error){
//     console.log("Error: ",error)
//     throw error
//     }
// })()
