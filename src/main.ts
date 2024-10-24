import { AppModule } from '@/app.module';
import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as YAML from 'json-to-pretty-yaml';

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
