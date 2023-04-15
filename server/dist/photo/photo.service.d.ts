import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
export declare class PhotoService {
    private photoRepository;
    constructor(photoRepository: Repository<Photo>);
    create(createPhotoDto: CreatePhotoDto): Promise<import("typeorm").InsertResult>;
    findOneById(id: number): Promise<Photo>;
    getAll(page: number, count: number): Promise<Photo[]>;
}
