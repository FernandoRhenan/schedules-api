import { IUser } from "../../interfaces/IUser";
import { UserRepository } from "../../repositories/UserRepository";
import { UserService } from "../UserService";

//service sao apenas uma camada para SUA aplicação nao usar diretamente a repository
export class UserServiceImpl implements UserService {
  // nesse bloco vemos invesao de dependencia a qual a classe depende
  //de um repository para funcionar mas ela usa os metodos do Repository nao
  //os seus proprios
  private repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }
  async getAllUsers(take?: number | undefined): Promise<IUser[]> {
    return this.repository.getAllUsers(take);
  }
  async editUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async createNewUser(user: IUser): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async deleteUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
