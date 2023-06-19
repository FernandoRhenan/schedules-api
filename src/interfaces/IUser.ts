export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  phone: string;
  rating: number;
  confirmedAccount: boolean;
  authCode: string
}
