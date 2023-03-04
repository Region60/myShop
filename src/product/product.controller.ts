import {
  Controller, HttpCode, HttpStatus, Post, Body,
} from '@nestjs/common';
import { ProductService } from './product.service';

import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
   
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  
  @Post()
  async create(@Body() createProductDto:CreateProductDto) {
    return await this.productService.create(createProductDto);
  }
}
