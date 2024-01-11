import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Availability {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ type: 'uuid' })
  product_id: string;

  @Column()
  in_stock: string;

  @Column()
  stock_quantity: string;

  @Column()
  valid_from: string;

  @Column()
  valid_to: string;

  @Column()
  is_for_sale: string;

  @Column()
  web_offer: string;
  @Column()
  pre_order: string;

  @Column()
  stock_status: string;

  @Column()
  size_stock_status: string;

  @Column()
  size_stock_amount: string;

  @ManyToOne(() => ProductEntity, (product) => product.availability)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
