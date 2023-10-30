import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
	mongoose.connect(process.env.MONGO_URI!).catch((err: any) => {
		console.log(err);
	});
};
