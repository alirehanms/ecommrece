import { Test, TestingModule } from '@nestjs/testing';
import { DeepLinkController } from './deep_link.controller';
import { DeepLinkService } from './deep_link.service';

describe('DeepLinkController', () => {
  let controller: DeepLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeepLinkController],
      providers: [DeepLinkService],
    }).compile();

    controller = module.get<DeepLinkController>(DeepLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
