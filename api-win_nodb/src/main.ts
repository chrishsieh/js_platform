declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import passport = require('passport');
require('dotenv').config()

async function bootstrap() {
	// for https support
	const fs = require('fs');
	const httpsOptions = {
		key: fs.readFileSync('./secrets/private-key.pem'),
		cert: fs.readFileSync('./secrets/public-certificate.pem'),
	};
	const app = await NestFactory.create(AppModule, {
		httpsOptions
	});

	// for http only
	//const app = await NestFactory.create(AppModule);

	//swagger options
	const options = new DocumentBuilder()
		.setTitle('Users Restful API')
		.setDescription('The users Restful API description')
		.setVersion('1.0')
		.addBearerAuth()
		.setSchemes("https","http")
		.build();

	//restful API doc
	const User_document = SwaggerModule.createDocument(app, options, {
		include: [UserModule],
	});
	SwaggerModule.setup('v1/api/job', app, User_document);

	const authApiOptions = new DocumentBuilder()
		.setTitle('Auth API Doc')
		.setDescription('Auth API Info')
		.setVersion('1.0')
		.addBearerAuth('Authorization', 'header', 'basic')
		.setSchemes("https","http")
		.build();
	const authApiDocument = SwaggerModule.createDocument(app, authApiOptions, {
		include: [AuthModule],
	});
	SwaggerModule.setup('v1/api/auth', app, authApiDocument);

	app.use(passport.initialize());
	await app.listen(process.env.PORT || 80);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}

bootstrap();
