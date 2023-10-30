import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<Box textAlign="right" p={3}>
			<Link to="/create" style={{ color: "white" }}>
				Blog Creator
			</Link>
		</Box>
	);
};

export default Menu;
