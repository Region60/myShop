import { productProvider } from './product.provider';
import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { RolesGuard } from 'src/roles/role.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [...productProvider, ProductService, RolesGuard ],
  exports: [ProductService],
})
export class ProductModule {}
