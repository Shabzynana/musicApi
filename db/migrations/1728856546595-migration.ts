import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1728856546595 implements MigrationInterface {
    name = 'Migration1728856546595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_song" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "songId" bigint NOT NULL, "userId" uuid, CONSTRAINT "PK_e0b8ed495b87fea1c882ec063df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_playlist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "playlistId" bigint NOT NULL, "userId" uuid, CONSTRAINT "PK_49fd9ed8fc57feeb406c108a1df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_song" ADD CONSTRAINT "FK_ad6b92bfc1867f77b7cffb6fd58" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_playlist" ADD CONSTRAINT "FK_d0d26f523b4dff8380c81d44ca3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_playlist" DROP CONSTRAINT "FK_d0d26f523b4dff8380c81d44ca3"`);
        await queryRunner.query(`ALTER TABLE "user_song" DROP CONSTRAINT "FK_ad6b92bfc1867f77b7cffb6fd58"`);
        await queryRunner.query(`DROP TABLE "user_playlist"`);
        await queryRunner.query(`DROP TABLE "user_song"`);
    }

}
