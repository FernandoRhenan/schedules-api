import { IUser } from "../interfaces/IUser";
import { IDefaultReturn } from "../interfaces/IDefaultReturn";
import { ISendEmail } from "../interfaces/ISendEmail";

export interface UserService {
  getAllUsers(take?: number): Promise<IDefaultReturn>;
  editUser(id: number): Promise<boolean>;
  createNewUser(user: IUser): Promise<IDefaultReturn>;
  sendEmail(data: ISendEmail): Promise<IDefaultReturn>
  deleteUser(id: number): Promise<boolean>;
}
