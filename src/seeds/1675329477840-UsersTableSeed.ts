import { MigrationInterface, QueryRunner } from 'typeorm';

export class UsersTableSeed1675329477840 implements MigrationInterface {
  name = 'UsersTableSeed1675329477840';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      // Password is 1234
      `INSERT INTO users (username, password, email) values ('vbadun', '$2a$10$xvXtSkv4g0K4pK4QhPAARO5ioqearWSRyr8kyZWjYzNEC7IKp4Kjy', 'vedran.badun@gmail.com'), ('rlabrovi', '$2a$10$xvXtSkv4g0K4pK4QhPAARO5ioqearWSRyr8kyZWjYzNEC7IKp4Kjy', 'roko.labrovic@gmail.com')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
