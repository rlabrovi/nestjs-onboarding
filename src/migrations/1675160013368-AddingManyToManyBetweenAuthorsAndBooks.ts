import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddingManyToManyBetweenAuthorsAndBooks1675160013368
  implements MigrationInterface
{
  name = 'AddingManyToManyBetweenAuthorsAndBooks1675160013368';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books_authors" ("booksId" integer NOT NULL, "authorsId" integer NOT NULL, CONSTRAINT "PK_b11eee472df51bc2878d599a659" PRIMARY KEY ("booksId", "authorsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b5dc8c40ffd14a0b53ec702bb8" ON "books_authors" ("booksId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_716e46108482b2cdfbc72008ca" ON "books_authors" ("authorsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "books_authors" ADD CONSTRAINT "FK_b5dc8c40ffd14a0b53ec702bb8e" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_authors" ADD CONSTRAINT "FK_716e46108482b2cdfbc72008cac" FOREIGN KEY ("authorsId") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "books_authors" DROP CONSTRAINT "FK_716e46108482b2cdfbc72008cac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_authors" DROP CONSTRAINT "FK_b5dc8c40ffd14a0b53ec702bb8e"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_716e46108482b2cdfbc72008ca"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b5dc8c40ffd14a0b53ec702bb8"`,
    );
    await queryRunner.query(`DROP TABLE "books_authors"`);
  }
}
