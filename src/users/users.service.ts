import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user: UserEntity = this.userRepository.create({
      full_name: createUserDto.full_name,
      country_code: createUserDto.country_code,
    });
    return await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values(user)
      .execute()
      .then(() => user);
  }

  async findAll() {
    return await this.userRepository

      .createQueryBuilder('user')
      //here you can also use select option .select() to select
      .getMany();
  }

  async findOne(id: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();

     if (!user) {
       throw new NotFoundException(`User with ID ${id} not found`);
     }

     return user;
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const episode = await this.userRepository.findOne({ where: { id } });

    if (!episode) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateUserDto.full_name) episode.full_name = updateUserDto.full_name;

    if (updateUserDto.country_code)
      episode.country_code = updateUserDto.country_code;
    return await this.userRepository.save(episode);
  }

  async remove(id: string) {
    const user = await this.userRepository

      .createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('id = :id', { id })
      .execute();
  
   if (user) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }
 return { message: `User with ID ${id} deleted successfully` };

}
}
 
