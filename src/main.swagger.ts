import { AppModule } from '@/app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import * as YAML from 'json-to-pretty-yaml';
import * as path from 'path';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

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
