import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductSpecificationService } from './product_specification.service';
import { CreateProductSpecificationDto } from './dto/create-product_specification.dto';
import { UpdateProductSpecificationDto } from './dto/update-product_specification.dto';

@Controller('product-specification')
export class ProductSpecificationController {
  constructor(private readonly productSpecificationService: ProductSpecificationService) {}

  @Post()
  create(@Body() createProductSpecificationDto: CreateProductSpecificationDto) {
    return this.productSpecificationService.create(createProductSpecificationDto);
  }

  @Get()
  findAll() {
    return this.productSpecificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSpecificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductSpecificationDto: UpdateProductSpecificationDto) {
    return this.productSpecificationService.update(+id, updateProductSpecificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSpecificationService.remove(+id);
  }
}
