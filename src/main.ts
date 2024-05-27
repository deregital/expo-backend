import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as YAML from 'json-to-pretty-yaml';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The NestJS API description')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();

  const prisma = new PrismaClient();

  const document = SwaggerModule.createDocument(app, config);

  fs.writeFileSync('./swagger.yaml', YAML.stringify(document));

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
