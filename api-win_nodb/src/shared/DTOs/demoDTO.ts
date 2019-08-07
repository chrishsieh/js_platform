import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class DemoDTO {
	@ApiModelProperty({
		description: 'QR Input String',
	})
	@IsString()
	input_QR: string;
}
