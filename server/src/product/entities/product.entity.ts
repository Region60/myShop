import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
  } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Photo } from 'src/photo/entities/photo.entity';
  
  @Entity('product')
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    nameProduct: string; 

    @Column({ length: 500 })
    descriptionProduct: string;
    
    @Column()
    price: number;

    @Column()
    quantity:number

    @Column()
    photoProduct:string

    @ManyToMany(() => Order, (order) => order.products)
    orders: Order []

    @ManyToMany(() => Photo, (photo) => photo.products)
    photos: Photo []
  }
  