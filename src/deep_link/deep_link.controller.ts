import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeepLinkService } from './deep_link.service';
import { CreateDeepLinkDto } from './dto/create-deep_link.dto';
import { UpdateDeepLinkDto } from './dto/update-deep_link.dto';

@Controller('deep-link')
export class DeepLinkController {
  constructor(private readonly deepLinkService: DeepLinkService) {}

  @Post()
  create(@Body() createDeepLinkDto: CreateDeepLinkDto) {
    return this.deepLinkService.create(createDeepLinkDto);
  }

  @Get()
  findAll() {
    return this.deepLinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deepLinkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeepLinkDto: UpdateDeepLinkDto) {
    return this.deepLinkService.update(+id, updateDeepLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deepLinkService.remove(+id);
  }
}
