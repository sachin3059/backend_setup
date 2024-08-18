import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


app.use(express.json({
    limit: "16kb"
}));


app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));


app.use(express.static("public"));




// routes:

import userRouter from './routes/user.routes.js'

app.use("/api/v1/users", userRouter);




// routes declaration


export { app };