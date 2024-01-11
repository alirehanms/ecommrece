import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdService } from './id.service';
import { CreateIdDto } from './dto/create-id.dto';
import { UpdateIdDto } from './dto/update-id.dto';

@Controller('id')
export class IdController {
  constructor(private readonly idService: IdService) {}

  @Post()
  create(@Body() createIdDto: CreateIdDto) {
    return this.idService.create(createIdDto);
  }

  @Get()
  findAll() {
    return this.idService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdDto: UpdateIdDto) {
    return this.idService.update(+id, updateIdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idService.remove(+id);
  }
}
