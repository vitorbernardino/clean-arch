import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaService } from "../prisma.service";
import { User } from "src/modules/user/entities/User";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";
import { Injectable } from "@nestjs/common";


@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) {}

  async save(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);
    await this.prisma.user.create({
      data: userRaw,
    });


  }

//   async findByEmail(email: string): Promise<User | undefined> {
    
//   }
}