import { IUser } from "../interfaces/IUser";

export interface UserService {
  getAllUsers(take?: number): Promise<IUser[]>;
  editUser(id: number): Promise<boolean>;
  createNewUser(user: IUser): Promise<IUser>;
  deleteUser(id: number): Promise<boolean>;
}
