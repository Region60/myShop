import { User } from '../users/entities/user.entity';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSYTORY')
    private orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto, id: number) {
    const user = new User();
    user.id = id;
    createOrderDto.user = [user];
    const response = await await this.orderRepository.save({
      ...createOrderDto,
      creatorId: id,
    });
    return response;
  }

  async delete(id: number) {
    return await this.orderRepository.delete({ id });
  }

  async update(updateOrderDto: UpdateOrderDto, orderId: number) {
    return await this.orderRepository.update(orderId, {
      ...updateOrderDto,
    });
  }
}
