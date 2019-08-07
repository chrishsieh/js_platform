import { Injectable } from '@nestjs/common';

import { Base64 } from 'js-base64';
import { DemoDTO } from '../DTOs/demoDTO';

@Injectable()
export class DemoService {
  async job(data: DemoDTO) {
    console.log(data);
    var decode_data = Base64.atob(data.input_QR);
    return Object.assign({ status: 'OK' }, data, {
      SN_Str: decode_data.split('/')[1],
      UserReadStr:
        decode_data.split('/')[0] +
        '/' +
        decode_data.split('/')[2] +
        ' ' +
        (Number(decode_data.split('/')[3]) / 1000).toFixed(3).toString() +
        'pcs',
      '1D_Barcode':
        decode_data.split('/')[0] +
        decode_data.split('/')[2] +
        decode_data.split('/')[3],
      Time: new Date(),
    });
  }
}
