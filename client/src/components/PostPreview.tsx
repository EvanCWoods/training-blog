import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IPost } from "../types/intefaces";
import "../assets/styles/colors.css";

const PostPreview: React.FC<IPost> = ({
	_id,
	title,
	subtitle,
	content,
	image,
}) => {
	return (
		<Box
			className="white-glassmorphism"
			sx={{ width: "330px", height: "450px", p: 1, m: 1 }}
		>
			<Box sx={{ width: "100%", height: "200px", overflow: "hidden" }}>
				<img
					src={image}
					alt="post-thumbnail"
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</Box>

			<Box sx={{ height: "150px" }}>
				{/* title */}
				<Typography variant="h5" sx={{ color: "white" }}>
					{title}
				</Typography>
				{/* Sub title */}
				<Typography variant="body2" sx={{ color: "white" }}>
					{subtitle}
				</Typography>
			</Box>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button variant="contained" sx={{ px: 3, mt: 2 }}>
					<Link
						to={`/blog/${_id}`}
						style={{ color: "white", textDecoration: "none" }}
					>
						See Post
					</Link>
				</Button>
			</Box>
		</Box>
	);
};

export default PostPreview;
