// boards.module.ts

import { Module } from '@nestjs/common';
import { BoardsResolver } from './borads.resolver';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Board, //
        ]),
      ],
    providers: [
        BoardsResolver, //
        BoardsService,
    ],
})
export class BoardsModule {}
