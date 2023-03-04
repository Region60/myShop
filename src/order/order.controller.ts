import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { OrderService } from './order.service';
import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto, @Req() req) {
    return this.orderService.create(createOrderDto, req.user.userId);
  }

  @Patch(':id')
  updateOrder(@Body() updateOrderDto: UpdateOrderDto, @Param() param) {
      return this.orderService.update(updateOrderDto, +param.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.delete(+id);
  }
}
