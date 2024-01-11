import { Injectable } from '@nestjs/common';
import { CreateIdDto } from './dto/create-id.dto';
import { UpdateIdDto } from './dto/update-id.dto';

@Injectable()
export class IdService {
  create(createIdDto: CreateIdDto) {
    return 'This action adds a new id';
  }

  findAll() {
    return `This action returns all id`;
  }

  findOne(id: number) {
    return `This action returns a #${id} id`;
  }

  update(id: number, updateIdDto: UpdateIdDto) {
    return `This action updates a #${id} id`;
  }

  remove(id: number) {
    return `This action removes a #${id} id`;
  }
}
