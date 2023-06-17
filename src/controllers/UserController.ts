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
      const user = await this.service.createNewUser(req.body.user);
      res.status(201).json(user);
    } catch (error) {
      res.status(500);
    }
  }

  async allUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.service.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500);
    }
  }
}
