import { CacheInterceptor, Controller, Get, Render, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleAuthGuard } from './shared/guards/simple-auth.guard';
import { Familyif } from './shared/interface/familylist';

@Controller()
@UseGuards(SimpleAuthGuard)
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index')
  public root(): Familyif {
    return this.appService.root();
  }
}
