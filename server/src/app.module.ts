import { OrderModule } from './orders/order.module';
//import { ProjectModule } from "./project/project.module"
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    OrderModule,
    MailModule,
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true}),
    CartModule,
  ],
})
export class AppModule {}
