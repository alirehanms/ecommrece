import { ProductEntity } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class DeliveryAndTerm {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ type: 'uuid' })
  product_id: string;

  @Column()
  delivery_restrictions: string;

  @Column()
  delivery_weight: string;

  @Column()
  warranty: string;

  @Column()
  terms_of_contract: string;

  @Column()
  delivery_time: string;

  @ManyToOne(() => ProductEntity, (product) => product.deliveryandTerm)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
