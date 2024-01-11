import { Injectable } from '@nestjs/common';
import { CreateOtherDto } from './dto/create-other.dto';
import { UpdateOtherDto } from './dto/update-other.dto';
import { Other } from './entities/other.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OtherService {
  constructor(
    @InjectRepository(Other)
    private readonly otherRepository: Repository<Other>,
  ) {}


   async create(createOtherDto: CreateOtherDto):Promise<Other> {
    const other: Other = this.otherRepository.create({
    product_id: createOtherDto.product_id,
    basket_link: createOtherDto.basket_link,


    });

 return await this.otherRepository
   .createQueryBuilder()
   .insert()
   .into(Other)
   .values(other)
   .execute()
   .then(() => other);
  }

  findAll() {
    return `This action returns all other`;
  }

  findOne(id: string) {
    return `This action returns a #${id} other`;
  }

  update(id: number, updateOtherDto: UpdateOtherDto) {
    return `This action updates a #${id} other`;
  }

  remove(id: number) {
    return `This action removes a #${id} other`;
  }
}
