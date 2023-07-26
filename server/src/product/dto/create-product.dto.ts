import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
import { IsNull } from 'typeorm';

export class CreateProductDto {
    @IsString()
    @ApiProperty()
    nameProduct: string

    @IsString()
    @ApiProperty()
    descriptionProduct: string

    @IsNumber()
    @ApiProperty()
    price: number

    @IsNumber()
    @ApiProperty()
    quantity: number

    @IsString()
    @ApiProperty()
    photoProduct: string
    
}