import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryAndTermsService } from './delivery_and_terms.service';
import { CreateDeliveryAndTermDto } from './dto/create-delivery_and_term.dto';
import { UpdateDeliveryAndTermDto } from './dto/update-delivery_and_term.dto';

@Controller('delivery-and-terms')
export class DeliveryAndTermsController {
  constructor(private readonly deliveryAndTermsService: DeliveryAndTermsService) {}

  @Post()
  create(@Body() createDeliveryAndTermDto: CreateDeliveryAndTermDto) {
    return this.deliveryAndTermsService.create(createDeliveryAndTermDto);
  }

  @Get()
  findAll() {
    return this.deliveryAndTermsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryAndTermsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryAndTermDto: UpdateDeliveryAndTermDto) {
    return this.deliveryAndTermsService.update(+id, updateDeliveryAndTermDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryAndTermsService.remove(+id);
  }
}
