import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import psqlConfig from './typeorm-psql.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(psqlConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
