import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>
  ) {}

  async create (createProductDto: CreateProductDto) {
      return await this.productRepository.insert(createProductDto)

  }
}
