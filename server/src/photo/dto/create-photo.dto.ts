import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
    @IsString()
    @ApiProperty()
    namePhoto: string

    @IsString()
    @ApiProperty()
    path: string

}