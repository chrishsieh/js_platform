import { ApiModelProperty } from '@nestjs/swagger';

export class ReadPersonDTO {
  @ApiModelProperty()
  readonly ID: number;

  @ApiModelProperty()
  readonly Name: string;

  @ApiModelProperty()
  readonly Age: number;
}
