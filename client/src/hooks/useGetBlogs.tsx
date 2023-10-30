import { useState, useEffect } from "react";
import blogService from "../services/blogs";
import { IPost } from "../types/intefaces";

const useGetBlogs = () => {
	const [blogs, setBlogs] = useState<IPost[]>([]);

	useEffect(() => {
		const getBlogsPosts = async () => {
			const response = await blogService.getBlogs();
			setBlogs(response);
		};
		getBlogsPosts();
	}, []);

	return blogs;
};

export default useGetBlogs;
