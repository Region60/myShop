import { User } from '../users/entities/user.entity';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    create(createOrderDto: CreateOrderDto, id: number): Promise<{
        creatorId: number;
        user: [User];
        products: [import("../product/entities/product.entity").Product];
    } & Order>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(updateOrderDto: UpdateOrderDto, orderId: number): Promise<import("typeorm").UpdateResult>;
}
