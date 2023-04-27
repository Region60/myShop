import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>
  ) {}

  async create (createProductDto: CreateProductDto) {
      return await this.productRepository.insert(createProductDto)
  }

  async update (updateProductDto: UpdateProductDto, productId: number){
    return await this.productRepository.update(productId,{...updateProductDto})
  }

  async findOneById(id: number) {
    console.log(id)
    return await this.productRepository.findOneBy({
      id,
    });
  }

  async getAll(page: number, count: number) {
    return await this.productRepository.find({
      skip: count * page - count,
      take: count,
   })
    
  }
}
