import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Custom {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ type: 'uuid' })
  product_id: string;

  @Column()
  custom_1: string;

  @Column()
  custom_2: string;

  @Column()
  custom_3: string;

  @Column()
  custom_4: string;

  @Column()
  custom_5: string;

  @Column()
  custom_6: string;

  @Column()
  custom_7: string;

  @Column()
  custom_8: string;

  @Column()
  custom_9: string;

  @ManyToOne(() => ProductEntity, (product) => product.custom)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
