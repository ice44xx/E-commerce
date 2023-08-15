import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    const passwordHash = 10;
    const passwordHashed = await hash(CreateUserDto.password, passwordHash);

    return this.userRepository.save({
      ...CreateUserDto,
      typeUser: 1,
      password: passwordHashed,
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      }
    });

    if(!user) {
      throw new NotFoundException("Usuário não encontrado")
    }

    return user;
  }

  async getUserByIdRelations(userId: number) : Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: userId
      },
      relations: ['address'],
    })
  }
}
