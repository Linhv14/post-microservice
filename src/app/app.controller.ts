import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('post.create')
  async create(@Payload(ValidationPipe) postDTO: any) {
    return await this.appService.create(postDTO)
  }
}
