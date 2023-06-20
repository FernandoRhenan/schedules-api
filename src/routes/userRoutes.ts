import { Router } from "express";
import { UserRouteController } from "../controllers/UserController";
import { UserServiceImpl } from "../services/impl/UserServiceImpl";
import { UserDAO } from "../repositories/impl/UserDAO";
const routes = Router();

//como a tipagem e a msm posso declarar a funcao assim sem executar
routes.post(
  "/register",

  // isso e a segregação de interface viu q coisa feia? mas é funcional
  (req, res) => {
    //por algum motivo express agr nao pode declarar em memoria a classe entao abrimos
    //uma funcao e passamos numa variavel a service :/
    const service = new UserRouteController(new UserServiceImpl(new UserDAO()));
    service.register(req, res);
  }
);

routes.post('/send-email', (req, res) => {
  const service = new UserRouteController(new UserServiceImpl(new UserDAO()));
  service.sendEmail(req, res)
});

routes.get("/allusers", (req, res) => {
  const service = new UserRouteController(new UserServiceImpl(new UserDAO()));
  service.allUsers(req, res);
});

export default routes;
