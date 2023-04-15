import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @IsString()
    @ApiProperty()
    nameProduct: string

    @IsString()
    @ApiProperty()
    descriptionProduct: string

    @IsString()
    @ApiProperty()
    price: number

    @IsString()
    @ApiProperty()
    quantity: number

    @IsString()
    @ApiProperty()
    photoProduct: string
    
}