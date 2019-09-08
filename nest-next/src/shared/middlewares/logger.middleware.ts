import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // 必須實作NestMiddleware介面
  public use(req: any, res: any, next: () => void): any {
    // tslint:disable-next-line: no-console
    console.log('Logger....');
    // 會接收request、response及next方法
    next(); // 告訴nest.js繼續下一個middleware，如果沒有，則交給request handler
  }
}
