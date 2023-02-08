import { MigrationInterface, QueryRunner } from 'typeorm';

export class AuthorsTableSeed1675329477841 implements MigrationInterface {
  name = 'AuthorsTableSeed1675329477841';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO authors (first_name, last_name, birth_date) values ('Aldous', 'Huxley', '1894-07-25 00:00:00'), ('Mato', 'Lovrak', '1899-03-08 00:00:00')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
