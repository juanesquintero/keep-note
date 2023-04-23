/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { setUpSwagger } from './config/swagger.config';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // NestJS app
  const app = await NestFactory.create(AppModule);
  // Swagger
  setUpSwagger(app);
  // Validation Pipes
  app.useGlobalPipes(new ValidationPipe());
  // Config
  const config = app.get(ConfigService);
  const [ port, prefix ] = [config.get('port'), config.get('prefix')];
  app.setGlobalPrefix(prefix);
  // Run app on port config
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${prefix}`
  );
}

bootstrap();
