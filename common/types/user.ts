export enum Role {
    UNCONFIRMED = 'unconfirmed',
    USER = 'user',
    ADMIN = 'admin',
    ROOTUSER = 'root'
  }

export interface User {
    id: number;
    userName  : string;
    email: string;
    phone: string;
    userPassword: string;
    roles: Role;
    registerDate: Date;
    confirmRegister: string;
  }
  