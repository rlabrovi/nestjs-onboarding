import { DataSourceOptions } from 'typeorm';
import { UserEntity } from './user/entities/user.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'library',
  password: 'library',
  database: 'library',
  entities: [UserEntity],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
};

export default config;
