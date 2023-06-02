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
exports.deleteTweet = exports.addNewTweet = exports.getAllTweets = void 0;
const tweetModel_1 = __importDefault(require("../models/tweetModel"));
const authModel_1 = __importDefault(require("../models/authModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const getAllTweets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield tweetModel_1.default.find({}).sort({ createdAt: -1 });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAllTweets = getAllTweets;
const addNewTweet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tweet } = req.body;
    try {
        const user_id = req.user._id;
        const user = yield authModel_1.default.findById(user_id);
        const data = yield tweetModel_1.default.create({ tweet, user_id, profileName: user === null || user === void 0 ? void 0 : user.profileName, username: user === null || user === void 0 ? void 0 : user.username });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.addNewTweet = addNewTweet;
const deleteTweet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(id))
            return res.status(404).json({ error: "Invalid ID" });
        const data = yield tweetModel_1.default.findOneAndDelete({ _id: id });
        if (!data)
            return res.status(404).json({ error: "No document found" });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
});
exports.deleteTweet = deleteTweet;
