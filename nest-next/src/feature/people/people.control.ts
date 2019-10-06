import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { SimpleAuthGuard } from '../../shared/guards/simple-auth.guard';

@Controller()
@UseGuards(SimpleAuthGuard)
// @UseInterceptors(CacheInterceptor)
export class PeopleDashBoardController {
  @Get('PeopleDashboard')
  @Render('PeopleDashboard')
  public async root() {
    return {};
  }
}
