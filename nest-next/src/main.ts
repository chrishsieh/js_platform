declare const module: any;

import { NestFactory } from '@nestjs/core';
import { RenderModule, RenderService } from 'nest-next';
import Next from 'next';
import { AppModule } from './app.module';
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from './i18n';

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

  await server.listen(process.env.PORT || 5000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}

bootstrap();
