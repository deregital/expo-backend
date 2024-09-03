import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as path from 'path';
import { writeFileSync } from 'fs';
import * as YAML from 'json-to-pretty-yaml';
import { ZodFilter } from 'src/filters/zod.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ZodFilter());

  const options = new DocumentBuilder()
    .setTitle('Expo Backend')
    .setDescription('Backend de las aplicaciones de Expo')
    .setVersion('1.0')
    .addTag('expo-backend')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const outputPath = path.resolve(process.cwd(), 'swagger.yaml');
  writeFileSync(outputPath, YAML.stringify(document), { encoding: 'utf8' });

  await app.close();
}
bootstrap();
