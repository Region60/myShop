import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('product')
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    nameProduct: string; 
    
    @Column()
    price: number;

    @Column()
    quantity:number

    @Column()
    photoProduct:string
  }
  