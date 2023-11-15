import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async create(postDTO: any) {
    console.log("first func in post microservice", postDTO)
  }
}
