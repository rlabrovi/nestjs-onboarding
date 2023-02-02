import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.repository.findOne({
      where: { username },
      select: ['id', 'username', 'email', 'bio', 'image', 'password'],
    });

    const isPasswordCorrect = await compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      throw new HttpException(
        'Invalid credentials',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (user && isPasswordCorrect) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: UserEntity) {
    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      ...user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<UserEntity> {
    return this.userService.create(registerDto);
  }
}
