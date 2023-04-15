import {
  Controller, HttpCode, HttpStatus, Post, Body, Patch, Get, Param, UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';

import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('product')
//@UseGuards(JwtAuthGuard)
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

  @Patch()
  async patch(@Body() updateProductDto:UpdateProductDto, productId:string ) {
    return await this.productService.update(updateProductDto, +productId);
  }

  @Get()
  async get(@Param() id:string) {
    return await this.productService.findOneById(+id)
  }

  @Get()
  async getAll(@Param() count:string, page:string) {
    return await this.productService.getAll(+page, +count)
  }

}
