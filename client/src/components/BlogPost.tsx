import { Typography, Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
	const [post, setPost] = useState<any>(undefined);
	const isSmallScreen = useMediaQuery("(max-width:600px)");
	const { id } = useParams();

	const getPost = async () => {
		const response = await fetch(`/api/getBlogById/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setPost(data);
	};

	useEffect(() => {
		getPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let postImage = post ? post.image : null;
	let postTitle = post ? post.title : null;
	let postSubtitle = post ? post.subtitle : null;
	let paragraphs = post ? post.paragraphs : [];

	if (isSmallScreen) {
		return (
			<Box>
				{post && (
					<Box display="flex" justifyContent="center" color="white">
						<Box sx={{ maxWidth: "1000px", textAlign: "left", mx: 1, py: 10 }}>
							<img
								src={postImage}
								alt="blog post"
								style={{ width: "100%", height: "auto" }}
							/>
							<Typography variant="h3">{postTitle}</Typography>
							<Typography variant="h5" sx={{ pt: 2 }}>
								{postSubtitle}
							</Typography>
							{paragraphs.map((paragraph: string, index: number) => {
								return (
									<Typography variant="body1" key={index} sx={{ my: 3 }}>
										{paragraph}
									</Typography>
								);
							})}
						</Box>
					</Box>
				)}
			</Box>
		);
	} else if (!isSmallScreen) {
		return (
			<Box>
				{post && (
					<Box display="flex" justifyContent="center" color="white">
						<Box sx={{ maxWidth: "1000px", textAlign: "left", mx: 10, py: 10 }}>
							<img
								src={postImage}
								alt="blog post"
								style={{ width: "100%", height: "auto" }}
							/>
							<Typography variant="h2">{postTitle}</Typography>
							<Typography variant="h5" sx={{ pt: 2 }}>
								{postSubtitle}
							</Typography>
							{paragraphs.map((paragraph: string, index: number) => {
								return (
									<Typography variant="body1" key={index} sx={{ my: 3 }}>
										{paragraph}
									</Typography>
								);
							})}
						</Box>
					</Box>
				)}
			</Box>
		);
	} else {
		return null;
	}
};

export default BlogPost;
