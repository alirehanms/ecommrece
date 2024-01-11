import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryAndTermDto } from './create-delivery_and_term.dto';

export class UpdateDeliveryAndTermDto extends PartialType(CreateDeliveryAndTermDto) {}
