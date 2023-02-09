import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/book/entities/book.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorEntity } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repository: Repository<AuthorEntity>,
    private dataSource: DataSource,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  findAll(query: any): Promise<any> {
    const builder = this.dataSource
      .getRepository(AuthorEntity)
      .createQueryBuilder('authors')
      .leftJoinAndSelect('authors.books', 'books')
      .getMany();

    return builder;
  }

  findOne(slug: string) {
    return `This action returns a #${slug} author`;
  }

  update(slug: string, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${slug} author`;
  }

  remove(slug: string) {
    return `This action removes a #${slug} author`;
  }
}
