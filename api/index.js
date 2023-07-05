import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.API_PORT, () => {
  console.log(`Server started on port ${process.env.API_PORT}`);
});
