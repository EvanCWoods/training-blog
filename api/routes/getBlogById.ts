import express from "express";
import dotenv from "dotenv";
import { Posts } from "../models/blogPost";

const router = express.Router();
dotenv.config();

router.get("/:id", async (req, res) => {
	const post = await Posts.findOne({ _id: req.params.id });
	res.status(200).json(post);
});

export default router;
