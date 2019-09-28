import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { SimpleAuthGuard } from '../../shared/guards/simple-auth.guard';
import { SmallBoxif } from '../../shared/interface/dashboardlist';
import { Familyif } from '../../shared/interface/familylist';
import { Personif } from '../../shared/interface/personlist';
import { DashBoardService } from './dashboard.service';

@Controller()
@UseGuards(SimpleAuthGuard)
// @UseInterceptors(CacheInterceptor)
export class DashBoardController {
  constructor(private readonly dashboardService: DashBoardService) {}

  @Get()
  @Render('Index')
  public async root(): Promise<Familyif & Personif & SmallBoxif> {
    return this.dashboardService.root();
  }

  @Get('Menu')
  @Render('Menu')
  public async Menu(): Promise<Familyif & Personif & SmallBoxif> {
    return this.dashboardService.root();
  }
}
