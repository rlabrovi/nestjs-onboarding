import { MigrationInterface, QueryRunner } from 'typeorm';

export class BooksAuthorsTableSeed1675329477843 implements MigrationInterface {
  name = 'BooksAuthorsTableSeed1675329477843';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO books_authors values 
    (1, 1), 
    (2, 2), 
    (2, 3), 
    (4, 4)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
