import { Box } from "@mui/material";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import backgroundsvg from "./assets/images/repeatableBG.svg";
import BlogPost from "./components/BlogPost";

function App() {
	return (
		<Box
			className="App"
			sx={{
				backgroundImage: `url(${backgroundsvg})`,
				backgroundRepeat: "repeat",
				minHeight: "100vh",
			}}
		>
			<Router>
				<Routes>
					<Route path="/" element={<Blog />} />
				</Routes>
				<Routes>
					<Route path="/blog/:id" element={<BlogPost />} />
				</Routes>
			</Router>
		</Box>
	);
}

export default App;
