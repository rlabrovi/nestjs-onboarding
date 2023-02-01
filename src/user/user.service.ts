import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this.repository.findOneBy({
      email: createUserDto.email,
    });

    if (userByEmail) {
      throw new HttpException(
        'Email already taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const userByUsername = await this.repository.findOneBy({
      username: createUserDto.username,
    });

    if (userByUsername) {
      throw new HttpException(
        'Username already taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);

    return await this.repository.save(newUser);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  async findByUsername(username: string): Promise<UserEntity> {
    const user = await this.repository.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async update(
    username: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.findByUsername(username);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    Object.assign(user, updateUserDto);

    return await this.repository.save(user);
  }

  async remove(username: string): Promise<DeleteResult> {
    const user = await this.findByUsername(username);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return await this.repository.delete({ username });
  }
}
