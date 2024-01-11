import { Test, TestingModule } from '@nestjs/testing';
import { ProductsCategoryController } from './products_category.controller';
import { ProductsCategoryService } from './products_category.service';

describe('ProductsCategoryController', () => {
  let controller: ProductsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsCategoryController],
      providers: [ProductsCategoryService],
    }).compile();

    controller = module.get<ProductsCategoryController>(ProductsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
