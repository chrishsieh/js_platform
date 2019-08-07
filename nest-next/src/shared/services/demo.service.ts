import { Injectable } from '@nestjs/common';

import md5 from 'blueimp-md5';
import { Base64 } from 'js-base64';
import { DemoDTO } from '../DTOs/demoDTO';

@Injectable()
export class DemoService {
  async job(data: DemoDTO) {
    console.log(data);
    return Object.assign({ status: 'OK' }, data, {
      pattern: data.input_QR.split('/')[1],
      get_time: new Date(),
    });
  }
}
