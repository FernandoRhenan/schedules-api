import { IUser } from "../../interfaces/IUser";
import { IDefaultReturn } from "../../interfaces/IDefaultReturn";
import { prisma } from "../../utils/PrismaIntance";
import { UserRepository } from "../UserRepository";

// a sigla DAO representa (Data Access Object) ou seja acesso ao banco de dados

//nesse aquivo vc irá editar cada coisa que o banco ira fazer
export class UserDAO implements UserRepository {
  async getAllUsers(take?: number | undefined): Promise<IUser[]> {
    const user = await prisma.user.findMany({
      take: take,
    });
    return user;
  }
  editUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async createNewUser(user: IUser): Promise<IDefaultReturn> {
    const { email, name, password, phone, authCode } = user
    try {
      const usersCount: number = await prisma.user.count({
        where: { email: email }
      })
      if (usersCount !== 0) {
        return { data: null, error: true, message: "E-mail já cadastrado.", status: 400 }
      } else {
        await prisma.user.create({
          data: { name: name, email: email, confirmedAccount: false, password: password, phone: phone, rating: 0, authCode: authCode }
        })
        return { data: null, error: false, message: "Usuário criado com sucesso.", status: 201 }
      }
    } catch {
      return { data: null, error: true, message: "Ocorreu um erro. Por favor tente novamente mais tarde.", status: 500 }
    }

  }
  deleteUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}