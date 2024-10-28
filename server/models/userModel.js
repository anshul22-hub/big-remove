import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true },
    photo: {type: String, required: true },
    firstName: {type: String }, 
    lastName: {type: String }, 
    creditBalance: {type: Number, default: 5 } 
})

const userModel = Mongoose.Models.user || mongoose.model("user",userSchema)

export default userModel;