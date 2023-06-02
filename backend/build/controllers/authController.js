"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const authModel_1 = __importDefault(require("../models/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validator_1 = __importDefault(require("validator"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, } = req.body;
    try {
        if (!email || !password) {
            throw new Error("All fields must be filled");
        }
        const user = yield authModel_1.default.findOne({ email });
        if (!user)
            throw Error("Incorrect Email");
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (!match)
            throw Error("Incorrect Password");
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.SECRET);
        res.status(201).json({ email, token, username: user.username, name: user.profileName });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, profileName, password, username, } = req.body;
    try {
        if (!email || !password || !profileName || !username) {
            throw new Error("All fields must be filled");
        }
        if (!validator_1.default.isEmail(email))
            throw new Error("Email is not valid");
        if (!validator_1.default.isLowercase(username))
            throw new Error("Username should be in Lowercase");
        const isEmail = yield authModel_1.default.findOne({ email });
        if (isEmail)
            throw new Error("Email already exists");
        const isUsername = yield authModel_1.default.findOne({ username });
        if (isUsername)
            throw new Error("Username already exists");
        const salt = yield bcrypt_1.default.genSalt();
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield authModel_1.default.create({ email, profileName, password: hash, username });
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.SECRET);
        res.status(201).json({ name: profileName, token, email, username });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.register = register;
