import mongoose from "mongoose";
const Schema = mongoose.Schema;

const authSchema = new Schema({
    profileName: {type: String, required: true},
    email: { type: String, unique: true, required: true },
    password: {type: String, required: true},
    username: {type: String, required: true, unique: true},
}, {timestamps: true})

const User = mongoose.model("User", authSchema);

export default User