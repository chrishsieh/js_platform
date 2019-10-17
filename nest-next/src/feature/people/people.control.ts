import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { SimpleAuthGuard } from '../../shared/guards/simple-auth.guard';
import { SmallBoxif } from '../../shared/interface/dashboardlist';
import { PeopleDashBoardService } from './people.service';

@Controller()
@UseGuards(SimpleAuthGuard)
// @UseInterceptors(CacheInterceptor)
export class PeopleDashBoardController {
  constructor(private readonly peopledashboardService: PeopleDashBoardService) {}

  @Get('PeopleDashboard')
  @Render('PeopleDashboard')
  public async peopleDashboard(): Promise<SmallBoxif & any> {
    return await this.peopledashboardService.root();
  }
}
