import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserRouteController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  async register(req: Request, res: Response): Promise<void> {
    //req.body.user vao ser os dados enviados do mobile pra api (verificação dos dados feita no mobile)
    try {
      const returned = await this.service.createNewUser(req.body);
      res.status(returned.status).json(returned);
    } catch (error) {
      res.status(500);
    }
  }

  async allUsers(req: Request, res: Response): Promise<void> {
    try {
      const returned = await this.service.getAllUsers();
      res.status(returned.status).json(returned);
    } catch (error) {
      res.status(500);
    }
  }
}
