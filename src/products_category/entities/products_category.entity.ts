import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductsCategory {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ type: 'uuid' })
  product_id: string;
   @Column()
   commission_group:string;

    @Column()
  merchant_product_category_path:string;

   @Column()
  merchant_product_second_category:string;

   @Column()
  merchant_product_third_category:string;


  @ManyToOne(() => ProductEntity, (product) => product.productCategory)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
