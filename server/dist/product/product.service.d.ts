import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<import("typeorm").InsertResult>;
    update(updateProductDto: UpdateProductDto, productId: number): Promise<import("typeorm").UpdateResult>;
    findOneById(id: number): Promise<Product>;
    getAll(page: number, count: number): Promise<Product[]>;
}
