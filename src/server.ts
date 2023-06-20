import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import express from "express";
import userRoutes from "./routes/userRoutes";

const server = express();
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())

server.use("/api/user", userRoutes);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server rodando na porta " + port);
});
