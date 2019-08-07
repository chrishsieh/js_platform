declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import passport = require('passport');

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  //swagger options
  const options = new DocumentBuilder()
    .setTitle('Users Restful API')
    .setDescription('The users Restful API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  //restful API doc
  const User_document = SwaggerModule.createDocument(server, options, {
    include: [UserModule],
  });
  SwaggerModule.setup('v1/api/job', server, User_document);

  const authApiOptions = new DocumentBuilder()
    .setTitle('Auth API Doc')
    .setDescription('Auth API Info')
    .setVersion('1.0')
    .addBearerAuth('Authorization', 'header', 'basic')
    .build();
  const authApiDocument = SwaggerModule.createDocument(server, authApiOptions, {
    include: [AuthModule],
  });
  SwaggerModule.setup('v1/api/auth', server, authApiDocument);

  server.use(passport.initialize());

  await server.listen(process.env.PORT || 5000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}

bootstrap();
