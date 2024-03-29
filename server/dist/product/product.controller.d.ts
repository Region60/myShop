import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("typeorm").InsertResult>;
    patch(updateProductDto: UpdateProductDto, productId: string): Promise<import("typeorm").UpdateResult>;
    get(id: any): Promise<import("./entities/product.entity").Product>;
    getAll(param: any): Promise<{
        products: import("./entities/product.entity").Product[];
        quantityProduct: number;
    }>;
}
