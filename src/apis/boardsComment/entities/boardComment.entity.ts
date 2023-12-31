// board.entity.ts

import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Board } from 'src/apis/boards/entities/board.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class BoardComment {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    _id: string;

    @Column()
    @Field(() => String)
    writer: string;

    @Column()
    @Field(() => String)
    contents: string;

    @Column()
    password: string;

    @Column()
    @Field(() => Float)
    rating: number;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => Board)
    board: Board;
}
