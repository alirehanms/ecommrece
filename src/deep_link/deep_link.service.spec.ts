import { Test, TestingModule } from '@nestjs/testing';
import { DeepLinkService } from './deep_link.service';

describe('DeepLinkService', () => {
  let service: DeepLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeepLinkService],
    }).compile();

    service = module.get<DeepLinkService>(DeepLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
