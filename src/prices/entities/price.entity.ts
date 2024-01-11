import {
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

import { ProductEntity } from 'src/products/entities/product.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({type:'uuid'})
  product_id: string;

  @Column()
  search_price: string;

  @Column()
  currency: number;

  @Column()
  store_price: string;

  @Column()
  delivery_cost: string;

  @Column()
  rrp_price: string;

  @Column()
  saving: string;

  @Column()
  savings_percent: string;

  @Column()
  base_price: string;

  @Column()
  base_price_amount: string;

  @Column()
  base_price_text: string;

  @Column()
  product_price_old: string;

  @ManyToOne(() => ProductEntity, (product) => product.price)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}

