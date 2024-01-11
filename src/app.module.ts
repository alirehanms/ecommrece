import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductsCategoryModule } from './products_category/products_category.module';
import { DeliveryAndTermsModule } from './delivery_and_terms/delivery_and_terms.module';
import { OtherModule } from './other/other.module';
import { PricesModule } from './prices/prices.module';
import { RatingsModule } from './ratings/ratings.module';
import { IdModule } from './id/id.module';
import { DeepLinkModule } from './deep_link/deep_link.module';
import { ProductSpecificationModule } from './product_specification/product_specification.module';
import { AvailabilityModule } from './availability/availability.module';
import { CustomsModule } from './customs/customs.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ProductsCategoryModule,
    DeliveryAndTermsModule,
    OtherModule,
    PricesModule,
    RatingsModule,
    IdModule,
    DeepLinkModule,
    ProductSpecificationModule,
    AvailabilityModule,
    CustomsModule,
    ImagesModule,
    TypeOrmModule.forRoot(dataSourceOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
