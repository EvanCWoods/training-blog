import { Box } from "@mui/material";
import Menu from "./Menu";
import PostPreview from "./PostPreview";
import { IPost } from "../types/intefaces";
import useGetBlogs from "../hooks/useGetBlogs";

const Blog = () => {
	// Custom hook to retrieve the blogs on load
	const blogs = useGetBlogs();

	return (
		<Box>
			{/* Menu */}
			<Menu />
			{/* List Blogs */}
			<Box display="flex" justifyContent="center" flexWrap="wrap">
				{blogs.map((post: IPost) => (
					<PostPreview {...post} />
				))}
			</Box>
		</Box>
	);
};

export default Blog;
