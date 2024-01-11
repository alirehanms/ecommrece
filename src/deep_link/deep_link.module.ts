import { Module } from '@nestjs/common';
import { DeepLinkService } from './deep_link.service';
import { DeepLinkController } from './deep_link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeepLink } from './entities/deep_link.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DeepLink])],
  controllers: [DeepLinkController],
  providers: [DeepLinkService],
})
export class DeepLinkModule {}
