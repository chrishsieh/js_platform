import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { PersonPerService } from './db.service';
import { PersonPerController } from './db.controller';
import { person_per } from '@entities/person_per';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([person_per])],
  providers: [PersonPerService],
  controllers: [PersonPerController],
})
export class DatabaseModule {
  constructor(
    @InjectConnection('default')
    private readonly connection: Connection,
  ) {}
}
