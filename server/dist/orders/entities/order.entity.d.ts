import { User } from '../../users/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';
import { orderStatus } from './orderStatus';
export declare class Order {
    id: number;
    createDate: Date;
    creatorId: number;
    orderStatus: orderStatus;
    user: User[];
    products: Product[];
}
