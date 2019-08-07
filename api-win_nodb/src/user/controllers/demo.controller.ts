import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiBearerAuth, ApiForbiddenResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiUnauthorizedResponse, } from '@nestjs/swagger';
import { DemoService } from '../../shared/services/demo.service';
import { DemoDTO } from '../../shared/DTOs/demoDTO';
import { SimpleAuthGuard } from '../../shared/guards/simple-auth.guard';

@ApiUseTags('API')
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Unauthorized' })
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
//@UseGuards(SimpleAuthGuard, AuthGuard('jwt')) // for debug
@UseGuards(AuthGuard('jwt'))
@Controller('api')
export class DemoController {
	constructor(private demoService: DemoService) { }

	@Post('job')
	@ApiCreatedResponse({ description: 'Job Input' })
	@ApiInternalServerErrorResponse({ description: 'Invalid Input' })
	create(@Body() demoDTO: DemoDTO) {
		return this.demoService.job(demoDTO);
	}
}
