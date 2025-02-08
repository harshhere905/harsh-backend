import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb=async()=>{
   try {
      const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`\n Database connected successfully!! DB Host: ${connectionInstance.connection.host}`);
   } catch (error) {
       console.log(`ERROR!!!! Database connection failed!!`,error);
       process.exit(1);
   }
}
export default connectdb;