import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Rating {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ type: 'uuid' })
  product_id: string;
  @Column()
  reviews: string;

  @Column()
  average_rating: string;

  @Column()
  rating: string;

  @Column()
  number_available: string;

  @ManyToOne(() => ProductEntity, (product) => product.rating)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
