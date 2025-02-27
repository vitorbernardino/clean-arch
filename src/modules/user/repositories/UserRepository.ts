import { Injectable } from "@nestjs/common";
import { User } from "../entities/User";

@Injectable()
export abstract class UserRepository {
  abstract save(user: User): Promise<void>;
  // abstract findByEmail(email: string): Promise<User | undefined>;
// abstract findByEmail(email: string): Promise<User | null>;
//   abstract findById(id: string): Promise<User | null>;
//   abstract deleteById(id: string): Promise<void>;
}