import mongoose from "mongoose";
const Schema = mongoose.Schema;

const authSchema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type: String, required: true},
    email: { type: String, unique: true, required: true },
    password: {type: String, required: true},
}, {timestamps: true})

const User = mongoose.model("User", authSchema);

export default User