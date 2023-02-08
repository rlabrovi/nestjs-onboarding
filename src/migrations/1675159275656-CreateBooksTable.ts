import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBooksTable1675159275656 implements MigrationInterface {
  name = 'CreateBooksTable1675159275656';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "isbn" character varying NOT NULL, "pages" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "books"`);
  }
}
