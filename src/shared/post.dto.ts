import { IsLatitude, IsLongitude, IsNotEmpty, IsOptional } from "class-validator";
import { type Prisma } from "@prisma/client";
export class CreatePostDTO {
    content: string
    star: number
    user: Prisma.UserCreateNestedOneWithoutPostInput
    service: Prisma.ServiceCreateNestedOneWithoutPostInput
    long?: number
    lat?: number
    address?: string
}