import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/book/entities/book.entity';
import { PageMetaDto } from 'src/utils/dto/page-meta.dto';
import { PageOptionsDto } from 'src/utils/dto/page-options.dto';
import { PageDto } from 'src/utils/dto/page.dto';
import { DataSource, Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { FilterAuthorDto } from './dto/filter-author.dto';
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

  async findAll(
    pageOptionsDto: PageOptionsDto,
    filterAuthorDto: FilterAuthorDto,
  ): Promise<PageDto<AuthorEntity>> {
    const builder = this.dataSource
      .getRepository(AuthorEntity)
      .createQueryBuilder('authors');

    if (filterAuthorDto?.firstName) {
      builder.where('"authors"."first_name" LIKE :firstName', {
        firstName: `%${filterAuthorDto.firstName}%`,
      });
    }

    if (filterAuthorDto?.lastName) {
      builder.andWhere('"authors"."last_name" LIKE :lastName', {
        lastName: `%${filterAuthorDto.lastName}%`,
      });
    }

    builder
      // .innerJoinAndSelect('authors.books', 'books')
      .orderBy('"authors"."created_at"', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.perPage);

    const total = await builder.getCount();
    const { entities } = await builder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ total, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
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
