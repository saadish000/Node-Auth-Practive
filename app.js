import express, { json } from "express";
const app = express();
import userRoute from "./routes/userRoutes";

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRoute);
