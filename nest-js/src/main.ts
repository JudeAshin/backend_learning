import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Judes Learning API')
    .setDescription('Api documentation for Judes Learning application')
    .setVersion('1.0')
    // .addBearerAuth({
    //   type: 'http',
    //   scheme: 'bearer',
    //   bearerFormat: 'JWT',
    //   name: 'Authorization',
    //   in: 'header',
    // })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
