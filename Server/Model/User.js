import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: { typeof: String, require: true },
    name: { typeof: String, require: true },
    email: { typeof: String, require: true },
    image: { typeof: String, require: true }
})
const user = mongoose.model('user', userSchema)
export default user