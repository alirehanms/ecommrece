import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomsService } from './customs.service';
import { CreateCustomDto } from './dto/create-custom.dto';
import { UpdateCustomDto } from './dto/update-custom.dto';

@Controller('customs')
export class CustomsController {
  constructor(private readonly customsService: CustomsService) {}

  @Post()
  create(@Body() createCustomDto: CreateCustomDto) {
    return this.customsService.create(createCustomDto);
  }

  @Get()
  findAll() {
    return this.customsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomDto: UpdateCustomDto) {
    return this.customsService.update(+id, updateCustomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customsService.remove(+id);
  }
}
