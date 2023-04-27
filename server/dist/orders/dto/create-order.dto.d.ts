import { User } from '../../users/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';
export declare class CreateOrderDto {
    user: [User];
    products: [Product];
}
