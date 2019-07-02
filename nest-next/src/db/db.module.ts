
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonPerService } from './db.service';
import { PersonPerController } from './db.controller';
import { person_per } from '../../entities/person_per';

@Module({
  imports: [TypeOrmModule.forFeature([person_per])],
  providers: [PersonPerService],
  controllers: [PersonPerController],
})
export class PersonPerModule {}