import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as YAML from 'json-to-pretty-yaml';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { patchNestjsSwagger } from '@anatine/zod-nestjs';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Expo Backend')
    .setDescription('Backend de las aplicaciones de Expo')
    .setVersion('1.0')
    .addTag('expo-backend')
    .build();

  patchNestjsSwagger();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  fs.writeFileSync('./swagger.yaml', YAML.stringify(document));

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
