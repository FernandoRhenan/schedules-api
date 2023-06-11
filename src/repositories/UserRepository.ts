import { IUser } from "../interfaces/IUser";

// isso exemplo de Single Resposability Principle do SOLID
export interface UserRepository {
  getAllUsers(take?: number): Promise<IUser[]>;
  editUser(id: number): Promise<boolean>;
  createNewUser(user: IUser): Promise<boolean>;
  deleteUser(id: number): Promise<boolean>;
}
