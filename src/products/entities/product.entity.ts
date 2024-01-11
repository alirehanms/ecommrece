// product.entity.ts
import { Availability } from 'src/availability/entities/availability.entity';
import { Custom } from 'src/customs/entities/custom.entity';
import { DeepLink } from 'src/deep_link/entities/deep_link.entity';
import { DeliveryAndTerm } from 'src/delivery_and_terms/entities/delivery_and_term.entity';
import { Id } from 'src/id/entities/id.entity';
import { Images } from 'src/images/entities/image.entity';
import { Other } from 'src/other/entities/other.entity';
import { Price } from 'src/prices/entities/price.entity';
import { ProductSpecification } from 'src/product_specification/entities/product_specification.entity';
import { ProductsCategory } from 'src/products_category/entities/products_category.entity';
import { Rating } from 'src/ratings/entities/rating.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Generated,
} from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column()
  brand_name: string;

  @Column({ nullable: true })
  merchant_product_id: string;

  @Column({ nullable: true })
  aw_product_id: string;

  @Column({ nullable: true })
  data_feed_id: string;

  @Column({ nullable: true })
  product_name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  merchant_id: number;

  @Column()
  merchant_name: string;

  @Column({ nullable: true })
  category_id: number;

  @Column()
  category_name: string;

  @Column()
  merchant_category: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  last_updated: Date;

  @OneToMany(() => DeepLink, (deepLink) => deepLink.product)
  deepLink: DeepLink[];

  @OneToMany(() => Other, (other) => other.product)
  other: Other[];

  @OneToMany(
    () => ProductsCategory,
    (productCategory) => productCategory.product,
  )
  productCategory: ProductsCategory[];

  @OneToMany(() => Price, (price) => price.product)
  price: Price[];

  @OneToMany(() => Availability, (availability) => availability.product)
  availability: Availability[];

  @OneToMany(() => Custom, (custom) => custom.product)
  custom: Custom[];

  @OneToMany(() => Id, (id) => id.product)
  ids: Id[];

  @OneToMany(() => Images, (image) => image.product)
  image: Images[];

  @OneToMany(() => Rating, (rating) => rating.product)
  rating: Rating[];

  @OneToMany(
    () => ProductSpecification,
    (productSpecification) => productSpecification.product,
  )
  productSpecification: ProductSpecification[];

  @OneToMany(
    () => DeliveryAndTerm,
    (deliveryandTerm) => deliveryandTerm.product,
  )
  deliveryandTerm: DeliveryAndTerm[];
}
