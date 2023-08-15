import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableState1692048620722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      ALTER TABLE public.state
        ADD COLUMN uf varchar(2) NOT NULL;
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      drop table public.state
        drop uf;
      `);
  }
}
