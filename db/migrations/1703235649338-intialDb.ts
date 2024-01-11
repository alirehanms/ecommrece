import { MigrationInterface, QueryRunner } from "typeorm";

export class IntialDb1703235649338 implements MigrationInterface {
    name = 'IntialDb1703235649338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "availability" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "in_stock" character varying NOT NULL, "stock_quantity" character varying NOT NULL, "valid_from" character varying NOT NULL, "valid_to" character varying NOT NULL, "is_for_sale" character varying NOT NULL, "web_offer" character varying NOT NULL, "pre_order" character varying NOT NULL, "stock_status" character varying NOT NULL, "size_stock_status" character varying NOT NULL, "size_stock_amount" character varying NOT NULL, CONSTRAINT "PK_05a8158cf1112294b1c86e7f1d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "deep_link" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "aw_deep_link" character varying NOT NULL, "merchant_deep_link" character varying NOT NULL, "product_id" uuid, CONSTRAINT "PK_8d83e5e8540659a712eb907bb2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "delivery_and_term" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "delivery_restrictions" character varying NOT NULL, "delivery_weight" character varying NOT NULL, "warranty" character varying NOT NULL, "terms_of_contract" character varying NOT NULL, "delivery_time" character varying NOT NULL, CONSTRAINT "PK_f2aac8de0f53e9ac69ec4674bb9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "id" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "ean" character varying NOT NULL, "isbn" character varying NOT NULL, "upc" character varying NOT NULL, "mpn" character varying NOT NULL, "parent_product_id" character varying, "product_GTIN" character varying NOT NULL, CONSTRAINT "PK_262c2ae15ef1b9366143a221074" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "merchant_thumb_url" character varying NOT NULL, "aw_image_url" character varying NOT NULL, "aw_thumb_url" character varying NOT NULL, "large_image" character varying NOT NULL, "alternate_image" character varying NOT NULL, "alternate_image_two" character varying NOT NULL, "alternate_image_three" character varying NOT NULL, "alternate_image_four" character varying NOT NULL, "merchant_image_url" character varying NOT NULL, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "other" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "basket_link" character varying NOT NULL, CONSTRAINT "PK_4a8bca4f05689f4a548945337ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "price" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "search_price" character varying NOT NULL, "currency" integer NOT NULL, "store_price" character varying NOT NULL, "delivery_cost" character varying NOT NULL, "rrp_price" character varying NOT NULL, "saving" character varying NOT NULL, "savings_percent" character varying NOT NULL, "base_price" character varying NOT NULL, "base_price_amount" character varying NOT NULL, "base_price_text" character varying NOT NULL, "product_price_old" character varying NOT NULL, CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_specification" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "brand_name" character varying NOT NULL, "brand_id" character varying, "colour" character varying NOT NULL, "product_short_description" character varying NOT NULL, "specifications" character varying NOT NULL, "condition" character varying NOT NULL, "product_model" character varying NOT NULL, "model_number" character varying NOT NULL, "dimensions" character varying NOT NULL, "keywords" character varying NOT NULL, "promotional_text" character varying NOT NULL, "product_type" character varying NOT NULL, CONSTRAINT "PK_b704b6c0f092cc7edc63d33088b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products_category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "commission_group" character varying NOT NULL, "merchant_product_category_path" character varying NOT NULL, "merchant_product_second_category" character varying NOT NULL, "merchant_product_third_category" character varying NOT NULL, CONSTRAINT "PK_9a5f6868c96e0069e699f33e124" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rating" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "reviews" character varying NOT NULL, "average_rating" character varying NOT NULL, "rating" character varying NOT NULL, "number_available" character varying NOT NULL, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand_name" character varying NOT NULL, "merchant_product_id" character varying, "aw_product_id" character varying, "data_feed_id" character varying, "product_name" character varying, "description" character varying NOT NULL, "merchant_id" integer, "merchant_name" integer NOT NULL, "category_id" integer, "category_name" character varying NOT NULL, "merchant_category" integer NOT NULL, "last_updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "custom" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "custom_1" character varying NOT NULL, "custom_2" character varying NOT NULL, "custom_3" character varying NOT NULL, "custom_4" character varying NOT NULL, "custom_5" character varying NOT NULL, "custom_6" character varying NOT NULL, "custom_7" character varying NOT NULL, "custom_8" character varying NOT NULL, "custom_9" character varying NOT NULL, CONSTRAINT "PK_7913689ead642c66760cf2bf2b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "country_code" integer NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "availability" ADD CONSTRAINT "FK_8917f2b90ae8ef1156b90c4be72" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "deep_link" ADD CONSTRAINT "FK_fa7a57f44b296cdc75250cee229" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery_and_term" ADD CONSTRAINT "FK_73dc84a8ffb8874b22cab787d82" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "id" ADD CONSTRAINT "FK_c174f826794f0d0489f1270774e" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_96fabbb1202770b8e6a58bf6f1d" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "other" ADD CONSTRAINT "FK_61d46bf02ab541bcdb4abe69308" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_7511931669fa9be1c5224cf09e0" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_specification" ADD CONSTRAINT "FK_fa612f24e28153c2466af4b707f" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products_category" ADD CONSTRAINT "FK_8bc367fb7d5de5f3446b0ff708d" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_2432a0d3bcc975f29eb1e43456b" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "custom" ADD CONSTRAINT "FK_d07c98f94059df5929e26718445" FOREIGN KEY ("product_id") REFERENCES "product_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "custom" DROP CONSTRAINT "FK_d07c98f94059df5929e26718445"`);
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_2432a0d3bcc975f29eb1e43456b"`);
        await queryRunner.query(`ALTER TABLE "products_category" DROP CONSTRAINT "FK_8bc367fb7d5de5f3446b0ff708d"`);
        await queryRunner.query(`ALTER TABLE "product_specification" DROP CONSTRAINT "FK_fa612f24e28153c2466af4b707f"`);
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_7511931669fa9be1c5224cf09e0"`);
        await queryRunner.query(`ALTER TABLE "other" DROP CONSTRAINT "FK_61d46bf02ab541bcdb4abe69308"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_96fabbb1202770b8e6a58bf6f1d"`);
        await queryRunner.query(`ALTER TABLE "id" DROP CONSTRAINT "FK_c174f826794f0d0489f1270774e"`);
        await queryRunner.query(`ALTER TABLE "delivery_and_term" DROP CONSTRAINT "FK_73dc84a8ffb8874b22cab787d82"`);
        await queryRunner.query(`ALTER TABLE "deep_link" DROP CONSTRAINT "FK_fa7a57f44b296cdc75250cee229"`);
        await queryRunner.query(`ALTER TABLE "availability" DROP CONSTRAINT "FK_8917f2b90ae8ef1156b90c4be72"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "custom"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
        await queryRunner.query(`DROP TABLE "rating"`);
        await queryRunner.query(`DROP TABLE "products_category"`);
        await queryRunner.query(`DROP TABLE "product_specification"`);
        await queryRunner.query(`DROP TABLE "price"`);
        await queryRunner.query(`DROP TABLE "other"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "id"`);
        await queryRunner.query(`DROP TABLE "delivery_and_term"`);
        await queryRunner.query(`DROP TABLE "deep_link"`);
        await queryRunner.query(`DROP TABLE "availability"`);
    }

}
