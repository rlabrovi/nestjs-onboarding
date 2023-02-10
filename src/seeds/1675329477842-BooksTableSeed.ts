import { MigrationInterface, QueryRunner } from 'typeorm';

export class BooksTableSeed1675329477842 implements MigrationInterface {
  name = 'BooksTableSeed1675329477842';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO books (title, isbn, pages) values 
      ('Brave new world', '098sdlksaou23kjnsdf0', '500'), 
      ('The Power of Now', 'asdkjh132987askjhk', '231'), 
      ('A New Earth', '98asdkjh23987safkjh', '101'), 
      ('Vlak u snijegu', 'asdkjlnk213980usdfkje', '256')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
