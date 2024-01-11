import { Injectable } from '@nestjs/common';
import { CreateDeliveryAndTermDto } from './dto/create-delivery_and_term.dto';
import { UpdateDeliveryAndTermDto } from './dto/update-delivery_and_term.dto';

@Injectable()
export class DeliveryAndTermsService {
  create(createDeliveryAndTermDto: CreateDeliveryAndTermDto) {
    return 'This action adds a new deliveryAndTerm';
  }

  findAll() {
    return `This action returns all deliveryAndTerms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryAndTerm`;
  }

  update(id: number, updateDeliveryAndTermDto: UpdateDeliveryAndTermDto) {
    return `This action updates a #${id} deliveryAndTerm`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryAndTerm`;
  }
}
