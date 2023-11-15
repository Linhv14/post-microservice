import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PostRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: Prisma.PostCreateInput) {
    console.log("postsRepository:::::", data)
    const post = await this.prismaService.post.create({ data })
    return this._exclude(post, ['password'])
  }

  async update(where: Prisma.PostWhereUniqueInput, data: Prisma.PostUpdateInput) {
    const post = await this.prismaService.post.update({ where, data })
    return this._exclude(post, ['password'])
  }

  async updateMany(where: Prisma.PostWhereUniqueInput, data: Prisma.PostUpdateInput) {
    const post = await this.prismaService.post.update({ where, data })
    return this._exclude(post, ['password'])
  }

  async upsert(where: Prisma.PostWhereUniqueInput, update: Prisma.PostUpdateInput, create: Prisma.PostCreateInput) {
    const post = await this.prismaService.post.upsert({ where, update, create })
    return this._exclude(post, ['password'])
  }

  async findUnique(where: Prisma.PostWhereUniqueInput) {
    const post = await this.prismaService.post.findUnique({ where })
    return post
  }

  async findUniqueWithoutField(where: Prisma.PostWhereUniqueInput, field: string) {
    const post = await this.prismaService.post.findUnique({ where })
    return this._exclude(post, [field])
  }


  async findAll() {
    const post = await this.prismaService.post.findMany()
    return this._exclude(post, ['password'])
  }

  async findMany(where: Prisma.PostWhereInput) {
    const post = await this.prismaService.post.findMany({ where })
    return this._exclude(post, ['password'])
  }

  async findFirst(where: Prisma.PostWhereInput) {
    const post = await this.prismaService.post.findFirst({ where })
    return this._exclude(post, ['password'])
  }

  async delete(where: Prisma.PostWhereUniqueInput) {
    const post = await this.prismaService.post.delete({ where })
    return this._exclude(post, ['password'])
  }

  async deleteMany(where: Prisma.PostWhereInput) {
    const post = await this.prismaService.post.deleteMany({ where })
    return this._exclude(post, ['password'])
  }

  async pagination(pages: { skip: number, take: number }) {
    const post = await this.prismaService.post.findMany(pages)
    return this._exclude(post, ['password'])
  }

  private _exclude(post: any, keys: string[]) {
    return Object.fromEntries(
      Object.entries(post).filter(([key]) => !keys.includes(key))
    );
  }
}
