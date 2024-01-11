import { ProductEntity } from 'src/products/entities/product.entity';
import {
    Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductSpecification {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({type:'uuid'})
  product_id: string;

@Column()
  brand_name:string;

  @Column({nullable:true})
  brand_id:string;

  @Column()
  colour:string;

  @Column()
  product_short_description:string;

  @Column()
  specifications:string;

  @Column()
  condition:string;

  @Column()
  product_model:string;

  @Column()
  model_number:string;

  @Column()
  dimensions:string;

  @Column()
  keywords:string;

  @Column()
  promotional_text:string;
  
  @Column()
  product_type:string;
 

  @ManyToOne(() => ProductEntity, (product) => product.productSpecification)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
