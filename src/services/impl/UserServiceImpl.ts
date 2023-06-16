import { IUser } from "../../interfaces/IUser";
import { IDefaultReturn } from "../../interfaces/IDefaultReturn";
import { UserRepository } from "../../repositories/UserRepository";
import { UserService } from "../UserService";
import { prisma } from "../../utils/PrismaIntance";

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
  async createNewUser(user: IUser): Promise<IDefaultReturn> {
    const { email, name, password, phone, } = user
    try {
      const usersCount = await prisma.user.count({
        where: { email: email }
      })
      if (usersCount !== 0) {
        return { data: null, error: true, message: "E-mail já cadastrado" }
      } else {

        const hashedPassword = "Fazer criptografia da senha (bcrypt)"

        await prisma.user.create({
          data: { name: name, email: email, confirmedAccount: false, password: hashedPassword, phone: phone, rating: 0 }
        })

        return { data: null, error: false, message: "Usuário criado com sucesso." }

      }
    } catch {
      return { data: null, error: true, message: "Ocorreu um erro. Por favor tente novamente mais tarde." }
    }

  }
  async deleteUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
