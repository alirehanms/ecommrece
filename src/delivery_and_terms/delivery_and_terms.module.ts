import { Module } from '@nestjs/common';
import { DeliveryAndTermsService } from './delivery_and_terms.service';
import { DeliveryAndTermsController } from './delivery_and_terms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryAndTerm } from './entities/delivery_and_term.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DeliveryAndTerm])],
  controllers: [DeliveryAndTermsController],
  providers: [DeliveryAndTermsService],
})
export class DeliveryAndTermsModule {}
