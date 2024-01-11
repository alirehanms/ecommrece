import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeMerchantNumberToName1703238626302 implements MigrationInterface {
    name = 'ChangeMerchantNumberToName1703238626302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_entity" DROP COLUMN "merchant_name"`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD "merchant_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_entity" DROP COLUMN "merchant_name"`);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD "merchant_name" integer NOT NULL`);
    }

}
