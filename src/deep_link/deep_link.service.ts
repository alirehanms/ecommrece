import { Injectable } from '@nestjs/common';
import { CreateDeepLinkDto } from './dto/create-deep_link.dto';
import { UpdateDeepLinkDto } from './dto/update-deep_link.dto';
import { DeepLink } from './entities/deep_link.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeepLinkService {
  constructor(
    @InjectRepository(DeepLink)
    private readonly otherRepository: Repository<DeepLink>,
  ) {}
   async create(createDeepLinkDto: CreateDeepLinkDto):Promise<DeepLink> {
    const deep: DeepLink = this.otherRepository .create({

      aw_deep_link: createDeepLinkDto.aw_deep_link,
      merchant_deep_link: createDeepLinkDto.merchant_deep_link,
      product_id: createDeepLinkDto.product_id


    });
    return await this.otherRepository
   .createQueryBuilder()
   .insert()
   .into(DeepLink)
   .values(deep)
   .execute()
   .then(() => deep);
  }

  

  findAll() {
    return `This action returns all deepLink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deepLink`;
  }

  update(id: number, updateDeepLinkDto: UpdateDeepLinkDto) {
    return `This action updates a #${id} deepLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} deepLink`;
  }
}
