import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
      const databaseConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`MongoDb conect !! ${databaseConnection.connection.host}`);
    }catch(error) {
        console.log("Connection error", error);
        process.exit(1)
    }
    
}

export default connectDB