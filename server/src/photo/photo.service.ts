import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';


@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>
  ) {}

  async create (createPhotoDto: CreatePhotoDto) {
      return await this.photoRepository.insert(createPhotoDto)
  }

  async findOneById(id: number) {
    return await this.photoRepository.findOneBy({
      id,
    });
  }

  async getAll(page: number, count: number) {
    return await this.photoRepository.find({
      skip: count * page - count,
      take: count,
   })
    
  }
}
