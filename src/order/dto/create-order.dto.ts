import { User } from '../../users/entities/user.entity';
import { IsArray} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/product/entities/product.entity';


export class CreateOrderDto {
    @IsArray()
    @ApiProperty()
    user:[User]

    @IsArray()
    @ApiProperty()
    products:[Product]

}