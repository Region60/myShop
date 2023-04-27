import { Order } from 'src/orders/entities/order.entity';
import { Photo } from 'src/photo/entities/photo.entity';
export declare class Product {
    id: number;
    nameProduct: string;
    descriptionProduct: string;
    price: number;
    quantity: number;
    photoProduct: string;
    orders: Order[];
    photos: Photo[];
}
