import mongoose from "mongoose";


const connectDb = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database is connected"))
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(error)
    }

}
export default connectDb
