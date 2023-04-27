import { User } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { orderStatus } from './orderStatus';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @Column()
  creatorId: number;

  @Column({
    type: "enum",
    enum: orderStatus,
    default: orderStatus.OPEN
  })
  orderStatus:orderStatus

  @ManyToMany(() => User, (user) => user.orders)
  user: User[];

  @ManyToMany(()=> Product,(product)=> product.orders)
  products: Product []


}
