import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export default class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    admin?: boolean = false;

    @CreateDateColumn({ name: 'created_at' })
    readonly createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    readonly updatedAt: Date;
}
