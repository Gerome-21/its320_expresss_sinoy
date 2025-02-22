import { connect } from "mongoose";

async function connectDB(){
    try{
        const conn = await connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected to ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default connectDB