import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryAndTermsService } from './delivery_and_terms.service';

describe('DeliveryAndTermsService', () => {
  let service: DeliveryAndTermsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryAndTermsService],
    }).compile();

    service = module.get<DeliveryAndTermsService>(DeliveryAndTermsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
