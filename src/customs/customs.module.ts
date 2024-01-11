import { Module } from '@nestjs/common';
import { CustomsService } from './customs.service';
import { CustomsController } from './customs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Custom } from './entities/custom.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Custom])],
  controllers: [CustomsController],
  providers: [CustomsService],
})
export class CustomsModule {}
