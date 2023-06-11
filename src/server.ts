import dotenv from "dotenv";
dotenv.config();

import express from "express";
import user_routes from "./routes/Users";

const server = express();

server.use("/user", user_routes);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server rodando na porta " + port);
});
