import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RenderModule, RenderService } from 'nest-next';
import Next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import nextI18next from './i18n';
import { UserModule } from './user/users.module';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev });

  await app.prepare();

  const server = await NestFactory.create(AppModule);

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  try {
    server.use(nextI18NextMiddleware(nextI18next));
  } catch (e) {
    throw e;
  }

  // get the RenderService
  const service = server.get(RenderService);

  service.setErrorRenderer(async (err, req, res) => {
    // send JSON response
    res.send(err.response);
  });

  // swagger options
  const options = new DocumentBuilder()
    .setTitle('Users Restful API')
    .setDescription('The users Restful API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('users')
    .build();

  // restful API doc
  const UserDocument = SwaggerModule.createDocument(server, options, {
    include: [UserModule],
  });
  SwaggerModule.setup('v1/api/user', server, UserDocument);

  const authApiOptions = new DocumentBuilder()
    .setTitle('Auth API Doc')
    .setDescription('Auth API Info')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth') // match tags in controllers
    .build();
  const authApiDocument = SwaggerModule.createDocument(server, authApiOptions, {
    include: [AuthModule],
  });
  SwaggerModule.setup('v1/api/auth', server, authApiDocument);

  await server.listen(process.env.PORT || 5000);

  /*
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
  */
}

bootstrap();
