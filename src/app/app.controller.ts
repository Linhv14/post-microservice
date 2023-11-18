import { Controller, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePostDTO } from 'src/shared/post.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('post.create')
  async create(@Payload(ValidationPipe) postDTO: CreatePostDTO) {
    console.log("Creating post::::")
    return await this.appService.create(postDTO)
  }
}
