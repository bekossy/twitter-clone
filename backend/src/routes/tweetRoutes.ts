import express from 'express';
const router = express.Router();
import { addNewTweet, deleteTweet, editTweet, getAllTweets } from '../controllers/tweetController';

router.get("/", getAllTweets);
router.post("/", addNewTweet);
router.delete("/:id", deleteTweet);
router.put("/:id", editTweet);

export default router;