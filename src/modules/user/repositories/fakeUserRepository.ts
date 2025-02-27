import { Injectable } from "@nestjs/common";
import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

@Injectable()
export class FakeUserRepository implements UserRepository {
  public users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email);

    if(!user) return null;

    return user;
   
  }
}