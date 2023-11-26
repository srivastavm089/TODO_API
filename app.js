import express from "express";
import userRoute from "./routes/user.js";
import taskRoute from './routes/task.js';
import cookieParser from "cookie-parser";
import cors from 'cors'
import { errorMiddleWare } from "./middleware/error.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true,

}))
app.use(userRoute);
app.use(taskRoute);
app.use(errorMiddleWare)

export default app;
