import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: LoginDto })
  async login(@Request() req) {
    return this.service.login(req.user);
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(ClassSerializerInterceptor)
  async register(@Body() registerDto: RegisterDto) {
    return this.service.register(registerDto);
  }
}
