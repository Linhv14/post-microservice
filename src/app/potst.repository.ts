import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PostRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: Prisma.PostCreateInput) {
    console.log("postsRepository:::::", data)
    return this.prismaService.post.create({ data })
  }

  async update(where: Prisma.PostWhereUniqueInput, data: Prisma.PostUpdateInput) {
    return this.prismaService.post.update({ where, data })
  }

  async updateMany(where: Prisma.PostWhereUniqueInput, data: Prisma.PostUpdateInput) {
    return this.prismaService.post.update({ where, data })
  }

  async upsert(where: Prisma.PostWhereUniqueInput, update: Prisma.PostUpdateInput, create: Prisma.PostCreateInput) {
    return this.prismaService.post.upsert({ where, update, create })
  }

  async findUnique(where: Prisma.PostWhereUniqueInput) {
    return this.prismaService.post.findUnique({ where })
  }

  async findUniqueWithoutField(where: Prisma.PostWhereUniqueInput, field: string) {
    return this.prismaService.post.findUnique({ where })
  }

  async findAll() {
    return this.prismaService.post.findMany()
  }

  async findMany(where: Prisma.PostWhereInput) {
    return this.prismaService.post.findMany({ where })
  }

  async findFirst(where: Prisma.PostWhereInput) {
    return this.prismaService.post.findFirst({ where })
  }

  async delete(where: Prisma.PostWhereUniqueInput) {
    return this.prismaService.post.delete({ where })
  }

  async deleteMany(where: Prisma.PostWhereInput) {
    return this.prismaService.post.deleteMany({ where })
  }

  async pagination(pages: { skip: number, take: number }) {
    return this.prismaService.post.findMany(pages)
  }

  private _exclude(post: any, keys: string[]) {
    return Object.fromEntries(
      Object.entries(post).filter(([key]) => !keys.includes(key))
    );
  }
}
