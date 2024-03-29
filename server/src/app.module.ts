import { OrderModule } from './orders/order.module';
//import { ProjectModule } from "./project/project.module"
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    OrderModule,
    MailModule,
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true}),
  ],
})
export class AppModule {}
