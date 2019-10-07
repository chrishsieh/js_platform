import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntities } from '../../shared/entity';
import { SharedModule } from '../../shared/shared.module';
import { FamilyDashboardItem } from '../dashboard/FamilyDashboardItem';
import { GroupsDashboardItem } from '../dashboard/GroupsDashboardItem';
import { PersonDashboardItem } from '../dashboard/PersonDashboardItem';
import { PeopleDashBoardController } from './people.control';
import { PeopleDashBoardService } from './people.service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([...userEntities])],
  providers: [
    PeopleDashBoardService,
    FamilyDashboardItem,
    PersonDashboardItem,
    GroupsDashboardItem,
  ],
  controllers: [PeopleDashBoardController],
  exports: [PeopleDashBoardService],
})
export class PeopleModule {}
