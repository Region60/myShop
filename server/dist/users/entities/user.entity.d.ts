import { Order } from 'src/orders/entities/order.entity';
import { Role } from '../../roles/role.enum';
export declare class User {
    id: number;
    userName: string;
    email: string;
    phone: string;
    userPassword: string;
    roles: Role;
    registerDate: Date;
    confirmRegister: string;
    orders: Order[];
}
