import {
    Controller, HttpCode, HttpStatus, Post, Body, Patch, Get, Param, UseGuards, UseInterceptors,
  } from '@nestjs/common';
  import { PhotoService } from './photo.service';
  
  import { ApiTags, ApiResponse } from '@nestjs/swagger';
  import { CreatePhotoDto } from './dto/create-photo.dto';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { FileFieldsInterceptor } from '@nestjs/platform-express';

  
  @ApiTags('photo')
  @UseGuards(JwtAuthGuard)
  @Controller('photo')
  export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}
     
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({
      status: 201,
      description: 'The record has been successfully created.',
    })

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'photo', maxCount: 3 }
      ]))
    async create(@Body() createPhotoDto:CreatePhotoDto) {
      return await this.photoService.create(createPhotoDto);
    }  
    
    @Get()
    async get(@Param() id:string) {
      return await this.photoService.findOneById(+id)
    }
  
    
    @Get()
    async getAll(@Param() count:string, page:string) {
      return await this.photoService.getAll(+page, +count)
    }
  
  }
  