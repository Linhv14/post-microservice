import { Injectable, Logger } from '@nestjs/common';
import { PostRepository } from './potst.repository';
import { type Prisma } from '@prisma/client';
import { CreatePostDTO } from 'src/shared/post.dto';
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)
  constructor(private readonly postRepository: PostRepository) {

  }
  async create(postDTO: CreatePostDTO) {
    this.logger.log("Creating post::::")
    return await this.postRepository.create(postDTO)
  }

}
