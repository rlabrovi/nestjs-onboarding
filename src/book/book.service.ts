import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(slug: string) {
    return `This action returns a #${slug} book`;
  }

  update(slug: string, updateBookDto: UpdateBookDto) {
    return `This action updates a #${slug} book`;
  }

  remove(slug: string) {
    return `This action removes a #${slug} book`;
  }
}
