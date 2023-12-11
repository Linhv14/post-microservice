/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,

      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'post-consumer',
        },
      },
    }
  );

  await app.listen();
  Logger.log(
    `Post microservice is running`
  );
}

bootstrap();
