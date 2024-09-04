import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { SuccessResponseInterceptor } from './shared/interceptors/success-response.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import * as path from 'path';
dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
    // logger: false,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SuccessResponseInterceptor());
  console.log("env port", process.env.PORT)
  app.setGlobalPrefix('api')
  const config = new DocumentBuilder()
    .setTitle('Your API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log("path.join(__dirname, '..', 'uploads')", path.join(__dirname, '..', 'src/uploads'))
  app.use('/uploads', express.static(path.join(__dirname, '..', 'src/uploads')))
  // app.use(express.static(path.join(__dirname, '..', 'src/uploads')));
  await app.listen(process.env.PORT);
}
bootstrap();
