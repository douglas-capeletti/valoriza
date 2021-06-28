import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from "typeorm";
import TagEntity from "./TagEntity";
import UserEntity from "./UserEntity";

@Entity('compliments')
export default class ComplimentEntity {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ name: "sender_id" })
    senderId: string;

    @JoinColumn({ name: "sender_id" })
    @ManyToOne(() => UserEntity)
    sender: UserEntity

    @Column({ name: "receiver_id" })
    receiverId: string;

    @JoinColumn({ name: "receiver_id" })
    @ManyToOne(() => UserEntity)
    receiver: UserEntity

    @Column({ name: "tag_id" })
    tagId: string;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => TagEntity)
    tag: UserEntity

    @Column()
    message: string;

    @CreateDateColumn({ name: 'created_at' })
    readonly createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    readonly updatedAt: Date;

}
