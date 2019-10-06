import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntities } from '../../shared/entity';
import { SharedModule } from '../../shared/shared.module';
import { PeopleDashBoardController } from './people.control';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([...userEntities])],
  providers: [],
  controllers: [PeopleDashBoardController],
  exports: [],
})
export class PeopleModule {}
