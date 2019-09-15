import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntities } from '../../shared/entity';
import { SharedModule } from '../../shared/shared.module';
import { DashBoardController } from './dashboard.control';
import { DashBoardService } from './dashboard.service';
import { FamilyDashboardItem } from './FamilyDashboardItem';
import { GroupsDashboardItem } from './GroupsDashboardItem';
import { PersonDashboardItem } from './PersonDashboardItem';

@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forFeature([...userEntities]),
  ],
  providers: [
    FamilyDashboardItem,
    PersonDashboardItem,
    GroupsDashboardItem,
    DashBoardService,
  ],
  controllers: [DashBoardController],
  exports: [
    DashBoardService,
  ],
})
export class DashBoardModule {}
