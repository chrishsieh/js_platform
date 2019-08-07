import { IsString, Length, } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TokenDTO {
	@ApiModelProperty({
		required: true,
		maxLength: 32,
		description: 'userName',
	})
	@IsString()
	@Length(0, 32, {
		message: '長度需要小於32',
	})
	userName: string;
}
