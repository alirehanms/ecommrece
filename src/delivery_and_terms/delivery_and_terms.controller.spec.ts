import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryAndTermsController } from './delivery_and_terms.controller';
import { DeliveryAndTermsService } from './delivery_and_terms.service';

describe('DeliveryAndTermsController', () => {
  let controller: DeliveryAndTermsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryAndTermsController],
      providers: [DeliveryAndTermsService],
    }).compile();

    controller = module.get<DeliveryAndTermsController>(DeliveryAndTermsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
