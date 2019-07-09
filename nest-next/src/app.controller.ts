import {
  CacheInterceptor,
  Controller,
  Get,
  Render,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleAuthGuard } from './shared/guards/simple-auth.guard';

@Controller()
@UseGuards(SimpleAuthGuard)
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index')
  public root(): string {
    return this.appService.root();
  }
}
