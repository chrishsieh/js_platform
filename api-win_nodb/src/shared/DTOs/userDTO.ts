import { IsString, Length, } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDTO {
	@ApiModelProperty({
		maxLength: 32,
		description: 'Username',
	})
	@IsString()
	@Length(0, 32, {
		message: '長度需要小於32',
	})
	usr_UserName: string;
}
