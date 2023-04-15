import { Order } from 'src/order/entities/order.entity';
import { Photo } from 'src/photo/entities/photo.entity';
export declare class Product {
    id: number;
    nameProduct: string;
    description: string;
    price: number;
    quantity: number;
    photoProduct: string;
    orders: Order[];
    photos: Photo[];
}
