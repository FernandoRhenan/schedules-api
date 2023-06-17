import bcrypt from 'bcryptjs'
import { IUser } from "../../interfaces/IUser";
import { UserRepository } from "../../repositories/UserRepository";
import { UserService } from "../UserService";
import { GenerateAuthCode } from '../../utils/GenerateAuthCode';

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
  async createNewUser(user: IUser): Promise<IUser> {
    const { password } = user

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const code = new GenerateAuthCode().getCode

    const data: IUser = {
      ...user,
      password: hash,
      authCode: code,
    }

    return data

  }
  async deleteUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
