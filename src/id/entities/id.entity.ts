import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Id {

@PrimaryGeneratedColumn('uuid')
@Generated('uuid')
id: string;

@Column({ type: 'uuid' })
product_id: string;
 
@Column()
ean: string;

 @Column()
  isbn: string;

  @Column()
  upc: string;

  @Column()
  mpn: string;

  @Column({nullable:true})
  parent_product_id: string;


  @Column()
  product_GTIN: string;



  @ManyToOne(() => ProductEntity, (product) => product.ids)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
