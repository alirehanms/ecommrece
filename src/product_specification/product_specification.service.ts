import { Injectable } from '@nestjs/common';
import { CreateProductSpecificationDto } from './dto/create-product_specification.dto';
import { UpdateProductSpecificationDto } from './dto/update-product_specification.dto';

@Injectable()
export class ProductSpecificationService {
  create(createProductSpecificationDto: CreateProductSpecificationDto) {
    return 'This action adds a new productSpecification';
  }

  findAll() {
    return `This action returns all productSpecification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSpecification`;
  }

  update(id: number, updateProductSpecificationDto: UpdateProductSpecificationDto) {
    return `This action updates a #${id} productSpecification`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSpecification`;
  }
}
