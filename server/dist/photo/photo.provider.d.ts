import { DataSource } from "typeorm";
import { Photo } from './entities/photo.entity';
export declare const photoProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Photo>;
    inject: string[];
}[];
