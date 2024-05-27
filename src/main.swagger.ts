import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as path from 'path';
import { writeFileSync } from 'fs';
import * as YAML from 'json-to-pretty-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const outputPath = path.resolve(process.cwd(), 'swagger.yaml');
  writeFileSync(outputPath, YAML.stringify(document), { encoding: 'utf8' });

  await app.close();
}
bootstrap();
