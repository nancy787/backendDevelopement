// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})




connectDB()









/*
1st approast to connect with database
import express from express;

const app = express()
( async ( ) => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.om("error", () => {
        console.log("error ", error);
        throw error
       })
       app.listen(process.env.PORT,() => {
        console.log(`App is listining on ${PORT}`);
       })
    } catch(error) {
        console.log("Errro", error);
    }
})
*/