import { DataSource } from "typeorm";
import { Product } from './entities/product.entity';
export declare const productProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Product>;
    inject: string[];
}[];
