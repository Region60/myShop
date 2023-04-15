import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    create(createPhotoDto: CreatePhotoDto): Promise<import("typeorm").InsertResult>;
    get(id: string): Promise<import("./entities/photo.entity").Photo>;
    getAll(count: string, page: string): Promise<import("./entities/photo.entity").Photo[]>;
}
