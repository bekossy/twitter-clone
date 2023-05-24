import express from 'express';
const router = express.Router();
import { addNewTweet, deleteTweet, getAllTweets } from '../controllers/tweetController';

router.get("/", getAllTweets);
router.post("/", addNewTweet);
router.delete("/:id", deleteTweet)

export default router