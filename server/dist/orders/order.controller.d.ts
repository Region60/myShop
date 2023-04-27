import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderDto: CreateOrderDto, req: any): Promise<{
        creatorId: number;
        user: [import("../users/entities/user.entity").User];
        products: [import("../product/entities/product.entity").Product];
    } & import("./entities/order.entity").Order>;
    updateOrder(updateOrderDto: UpdateOrderDto, param: any): Promise<import("typeorm").UpdateResult>;
    deleteOrder(id: string): Promise<import("typeorm").DeleteResult>;
}
