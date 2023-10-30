import express from "express";
import getBlogs from "./getBlogs";
import getBlogById from "./getBlogById";

const router = express.Router();

router.use("/getBlogs", getBlogs);
router.use("/getBlogById", getBlogById);

export default router;
