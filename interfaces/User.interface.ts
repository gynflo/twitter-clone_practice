export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  profileImage: string;
}

export interface UserForm {
  _id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  profileImage?: string;
}

export interface LoginForm {
  username: string;
  password: string;
}
