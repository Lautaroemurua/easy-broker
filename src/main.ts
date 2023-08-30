import * as path from 'path';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json')).toString('utf-8'),
);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(pkg.name)
    .setDescription(pkg.description)
    .setVersion(pkg.version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT') || 3000);
  console.info(`Server running on port: ${configService.get('PORT')}`);
}
bootstrap();
