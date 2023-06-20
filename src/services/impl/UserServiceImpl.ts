import bcrypt from 'bcryptjs'
import { IUser } from "../../interfaces/IUser";
import { IDefaultReturn } from '../../interfaces/IDefaultReturn';
import { UserRepository } from "../../repositories/UserRepository";
import { UserService } from "../UserService";
import { GenerateAuthCode } from '../../utils/GenerateAuthCode';
import { NodeMailer } from '../../utils/NodeMailer';
import { ISendEmail } from '../../interfaces/ISendEmail';


//service sao apenas uma camada para SUA aplicação nao usar diretamente a repository
export class UserServiceImpl implements UserService {
  // nesse bloco vemos invesao de dependencia a qual a classe depende
  //de um repository para funcionar mas ela usa os metodos do Repository nao
  //os seus proprios
  private repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }
  async getAllUsers(take?: number | undefined): Promise<IDefaultReturn> {
    return this.repository.getAllUsers(take);
  }

  async editUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  createNewUser(user: IUser): Promise<IDefaultReturn> {

    const { password } = user

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    // const code = new GenerateAuthCode().getCode

    const data: IUser = {
      ...user,
      password: hash,
    }

    return this.repository.createNewUser(data)

  }

  async sendEmail(data: ISendEmail): Promise<IDefaultReturn> {
    const { to, subject, text, html } = data
    try {
      await new NodeMailer().send_email(to, subject, text, html)
      return { data: {}, error: false, message: "Foi enviado um e-mail para sua caixa de entrada.", status: 200 }
    } catch {
      return { data: {}, error: true, message: "Ocorreu um erro. Por favor tente novamente mais tarde.", status: 500 }
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
