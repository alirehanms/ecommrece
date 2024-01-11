import { Module } from '@nestjs/common';
import { ProductsCategoryService } from './products_category.service';
import { ProductsCategoryController } from './products_category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategory } from './entities/products_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsCategory])],
  controllers: [ProductsCategoryController],
  providers: [ProductsCategoryService],
})
export class ProductsCategoryModule {}
