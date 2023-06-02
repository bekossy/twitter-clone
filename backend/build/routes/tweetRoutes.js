"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const tweetController_1 = require("../controllers/tweetController");
const authTweets_1 = require("../middleware/authTweets");
router.use(authTweets_1.authTweets);
router.get("/", tweetController_1.getAllTweets);
router.post("/", tweetController_1.addNewTweet);
router.delete("/:id", tweetController_1.deleteTweet);
exports.default = router;
