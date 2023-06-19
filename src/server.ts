import cors from 'cors';
import express from "express";
import user_routes from "./routes/userRoutes";
import { PORT_API } from './utils/enviroments';

const server = express();
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())

server.use("/api/user", user_routes);

server.listen(PORT_API, () => {
  console.log("Server rodando na porta " + PORT_API);
});
