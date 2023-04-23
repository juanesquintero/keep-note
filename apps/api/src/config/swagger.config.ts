import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const ROUTES = {
  users: 'users'
}


const projectDescription =
  `This project is the API Rest with NestJS for Keep Note application ` +
  `uses (Docker, Swagger, Interceptors, Pipes, JWT, OAuth, TypeORM)`;
  `By juanesquintero https://gitlab.com/juanesquintero`;

// OpenAPI Swagger Config
const swaggerConfig = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('NestJS Template')
  .setDescription(projectDescription)
  .setVersion('0.0.1')
  .addTag(ROUTES.users, `Operations with ${ROUTES.users} entity for Auth module`)
  .build();

export const setUpSwagger = (app: INestApplication) => {
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
};
