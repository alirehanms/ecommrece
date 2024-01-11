// deep-link.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Generated } from 'typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';

@Entity()
export class DeepLink {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @ManyToOne(() => ProductEntity, (product) => product.deepLink)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @Column()
  aw_deep_link: string;

  @Column()
  merchant_deep_link: string;
  @Column()
  product_id: string;
}

