import { Module } from '@nestjs/common';
import { IdService } from './id.service';
import { IdController } from './id.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Id } from './entities/id.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Id])],
  controllers: [IdController],
  providers: [IdService],
})
export class IdModule {}
