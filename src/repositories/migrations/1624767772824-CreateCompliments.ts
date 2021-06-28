import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624767772824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid',
                        default: 'gen_random_uuid()'
                    },
                    {
                        name: "sender_id",
                        type: "uuid",
                    },
                    {
                        name: "receiver_id",
                        type: "uuid",
                    },
                    {
                        name: "tag_id",
                        type: "uuid",
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKComplimentsSenderId",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["sender_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKComplimentsReceiverId",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["receiver_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKComplimentsTagId",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
