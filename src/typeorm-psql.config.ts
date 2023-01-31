import { DataSourceOptions } from 'typeorm';
import { AuthorEntity } from './author/entities/author.entity';
import { BookEntity } from './book/entities/book.entity';
import { UserEntity } from './user/entities/user.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'library',
  password: 'library',
  database: 'library',
  entities: [UserEntity, AuthorEntity, BookEntity],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
};

export default config;
