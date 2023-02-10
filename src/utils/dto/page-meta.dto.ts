import { ApiProperty } from '@nestjs/swagger';
import { PageMetaInterface } from '../interfaces/page-meta.interface';

export class PageMetaDto {
  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly perPage: number;

  @ApiProperty()
  readonly total: number;

  @ApiProperty()
  readonly pages: number;

  @ApiProperty()
  readonly hasPreviousPage: boolean;

  @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, total }: PageMetaInterface) {
    this.page = pageOptionsDto.page;
    this.perPage = pageOptionsDto.perPage;
    this.total = total;
    this.pages = Math.ceil(this.total / this.perPage);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pages;
  }
}
