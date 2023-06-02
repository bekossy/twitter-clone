"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const authSchema = new Schema({
    profileName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
}, { timestamps: true });
const User = mongoose_1.default.model("User", authSchema);
exports.default = User;
