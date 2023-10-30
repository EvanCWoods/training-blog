import express from "express";
import routes from "./routes";
import { dbConnection } from "./config/connection";

const app = express();
const PORT = process.env.PORT || 3001;
dbConnection();

app.use("/api", routes);

app.listen(PORT, () => {
	console.log(`Server Started at PORT ${PORT}`);
});
