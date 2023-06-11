export interface ILogin_user {
  email: string;
  password: string;
}

export interface IRegister_user extends ILogin_user {
  name: string;
  phone: string;
  rating: number;
  confirmedAccount: boolean;
}

export interface IUser extends IRegister_user {
  id?: number;
}
