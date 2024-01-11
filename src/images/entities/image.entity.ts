import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Images {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ type: 'uuid' })
  product_id: string;

  @Column()
  merchant_thumb_url: string;

  @Column()
  aw_image_url: string;

  @Column()
  aw_thumb_url: string;

  @Column()
  large_image: string;

  @Column()
  alternate_image: string;

  @Column()
  alternate_image_two: string;

  @Column()
  alternate_image_three: string;

  @Column()
  alternate_image_four: string;
  
  @Column()
  merchant_image_url: string;

  @ManyToOne(() => ProductEntity, (product) => product.image)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
