import {
//  CacheInterceptor,
  Controller,
  Get,
  Render,
  UseGuards,
//  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleAuthGuard } from './shared/guards/simple-auth.guard';
import { Familyif } from './shared/interface/familylist';
import { Personif } from './shared/interface/personlist';

@Controller()
@UseGuards(SimpleAuthGuard)
// @UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // @Render('Index')
  public async root(): Promise<Familyif & Personif> {
    return this.appService.root();
  }

  // @Get('Menu')
  // @Render('Menu')
  public async Menu(): Promise<Familyif & Personif> {
    return this.appService.root();
  }
}
