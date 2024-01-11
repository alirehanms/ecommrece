import { Module } from '@nestjs/common';
import { ProductSpecificationService } from './product_specification.service';
import { ProductSpecificationController } from './product_specification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSpecification } from './entities/product_specification.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductSpecification])],
  controllers: [ProductSpecificationController],
  providers: [ProductSpecificationService],
})
export class ProductSpecificationModule {}
