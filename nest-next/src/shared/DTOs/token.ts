import {
  IsArray,
  IsEmail,
  IsNumber,
  IsNumberString,
  IsString,
  Length,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TokenDTO {
  @ApiModelProperty({
    maxLength: 32,
    description: 'user_name',
  })
  @IsString()
  @Length(0, 32, {
    message: '長度需要小於32',
  })
  user_name: string;

  @ApiModelProperty({
    maxLength: 32,
    description: 'password',
  })
  @IsString()
  @Length(0, 32, {
    message: '長度需要小於32',
  })
  password: string;
}
