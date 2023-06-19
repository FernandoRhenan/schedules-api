import { IDefaultReturn } from "../interfaces/IDefaultReturn";
import { IUser } from "../interfaces/IUser";

// isso exemplo de Single Resposability Principle do SOLID
export interface UserRepository {
  getAllUsers(take?: number): Promise<IDefaultReturn>;
  editUser(id: number): Promise<boolean>;
  createNewUser(user: IUser): Promise<IDefaultReturn>;
  deleteUser(id: number): Promise<boolean>;
}
