import { MigrationInterface, QueryRunner } from 'typeorm';

export class BiDirectionalManyToManyRelationBetweenBooksAndAuthors1675947669526
  implements MigrationInterface
{
  name = 'BiDirectionalManyToManyRelationBetweenBooksAndAuthors1675947669526';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books_authors" ("books_id" integer NOT NULL, "authors_id" integer NOT NULL, CONSTRAINT "PK_79766c354f37b8535497e764309" PRIMARY KEY ("books_id", "authors_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_51734dd7df1dc9819a5a96942e" ON "books_authors" ("books_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8ab6b46d5a57d81813f8137be4" ON "books_authors" ("authors_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "books_authors" ADD CONSTRAINT "FK_51734dd7df1dc9819a5a96942eb" FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_authors" ADD CONSTRAINT "FK_8ab6b46d5a57d81813f8137be41" FOREIGN KEY ("authors_id") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "books_authors" DROP CONSTRAINT "FK_8ab6b46d5a57d81813f8137be41"`,
    );
    await queryRunner.query(
      `ALTER TABLE "books_authors" DROP CONSTRAINT "FK_51734dd7df1dc9819a5a96942eb"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_8ab6b46d5a57d81813f8137be4"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_51734dd7df1dc9819a5a96942e"`,
    );
    await queryRunner.query(`DROP TABLE "books_authors"`);
  }
}
