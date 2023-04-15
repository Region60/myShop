import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
  } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
  
  @Entity('product')
  export class Photo {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    namePhoto: string; 

    @Column({length: 500})
    path: string

    @ManyToMany(() => Product, (product) => product.photos)
    products: Product []
  }
  