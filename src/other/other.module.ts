import { Module } from '@nestjs/common';
import { OtherService } from './other.service';
import { OtherController } from './other.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Other } from './entities/other.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Other])],

  controllers: [OtherController],
  providers: [OtherService],
})
export class OtherModule {}
