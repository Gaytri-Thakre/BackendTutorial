import mongoose from "mongoose";


// DB is on another continent
const connectDB=async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected!! DB HOST:${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MongoDB connection error",error)
        // different exits
        process.exit(1)
    }
}
export default connectDB