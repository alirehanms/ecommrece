import { Injectable } from '@nestjs/common';
import { CreateProductsCategoryDto } from './dto/create-products_category.dto';
import { UpdateProductsCategoryDto } from './dto/update-products_category.dto';

@Injectable()
export class ProductsCategoryService {
  create(createProductsCategoryDto: CreateProductsCategoryDto) {
    return 'This action adds a new productsCategory';
  }

  findAll() {
    return `This action returns all productsCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsCategory`;
  }

  update(id: number, updateProductsCategoryDto: UpdateProductsCategoryDto) {
    return `This action updates a #${id} productsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsCategory`;
  }
}
