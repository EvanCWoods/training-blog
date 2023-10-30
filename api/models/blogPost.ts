import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	paragraphs: {
		type: Array<string>,
		required: true,
	},
	publishedDate: {
		type: Number,
		required: false,
	},
	image: {
		type: String,
		required: true,
	},
});

export const Posts = mongoose.model("Posts", blogSchema, "posts");
