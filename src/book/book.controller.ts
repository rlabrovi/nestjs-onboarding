import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
@ApiTags('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.bookService.findOne(slug);
  }

  @Patch(':id')
  update(@Param('slug') slug: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(slug, updateBookDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.bookService.remove(slug);
  }
}
