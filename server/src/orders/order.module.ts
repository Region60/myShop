import { DatabaseModule } from '../database/database.module'
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { orderProviders } from './order.providers';
import { OrderService } from './order.service';

@Module({
  imports: [DatabaseModule,],
  controllers: [OrderController],
  providers: [...orderProviders, OrderService],
  exports: [OrderService]
})
export class OrderModule {}
