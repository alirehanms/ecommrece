import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from 'src/ratings/entities/rating.entity';
import { link } from 'fs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const product: ProductEntity = this.productRepository.create({
      brand_name: createProductDto.brand_name,
      merchant_product_id: createProductDto.merchant_product_id,
      aw_product_id: createProductDto.aw_product_id,
      data_feed_id: createProductDto.data_feed_id,
      product_name: createProductDto.product_name,
      description: createProductDto.description,
      merchant_id: createProductDto.merchant_id,
      merchant_name: createProductDto.merchant_name,
      category_id: createProductDto.category_id,
      category_name: createProductDto.category_name,
      merchant_category: createProductDto.merchant_category,
    });

    return await this.productRepository
      .createQueryBuilder()
      .insert()
      .into(ProductEntity)
      .values(product)
      .execute()
      .then(() => product);
  }

  async findAll() {
    const product = await this.productRepository
      .createQueryBuilder('product')
      .getMany();
    return product;
  }

  async findOne(id: string) {
    const product = await this.productRepository
      .createQueryBuilder('product')
      .where('product.id = :id', { id })
      .getOne();

    return product;
  }

  async findOn(productId: string) {
    const product = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.other', 'other')
      .leftJoinAndSelect('product.deepLink', 'deepLink')
      .where('product.id = :productId', { productId })
      .getOne();

    if (!product) {
      throw new NotFoundException(`Stream with ID ${productId} not found`);
    }
    return {
      // productid_data: {
      //   id: product.id,
      //   brand_name: product.brand_name
      // },
      //   other_Data: product.other,

      //   deeplink_data:product.deepLink

      // // other_data: {
      // //   id: product.other.id,
      // //   basket_link: product.other.basket_link,
      // // },
      data: product,
      message: HttpStatus.OK,
    };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
