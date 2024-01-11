import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Other {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({type:'uuid'})
  product_id: string;

  @Column()
  basket_link: string;

  @ManyToOne(() => ProductEntity, (product) => product.other)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
