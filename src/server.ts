import 'dotenv/config'
import cors from 'cors';
import express from "express";
import userRoutes from "./routes/userRoutes";

const server = express();
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())

server.use("/api/user", userRoutes);

server.listen(process.env.PORT_API, () => {
  console.log("Server rodando na porta " + process.env.PORT_API);
});
