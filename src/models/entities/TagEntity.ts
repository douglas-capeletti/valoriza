import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('tags')
export default class TagEntity {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    readonly createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    readonly updatedAt: Date;
}
