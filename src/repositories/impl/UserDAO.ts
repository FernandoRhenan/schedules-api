import { IUser } from "../../interfaces/IUser";
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
  createNewUser(user: IUser): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
