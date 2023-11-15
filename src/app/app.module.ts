import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostRepository } from './potst.repository';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule],
  controllers: [AppController],
  providers: [AppService, PostRepository],
})
export class AppModule {}
