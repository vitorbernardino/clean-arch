import { Injectable } from "@nestjs/common";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import * as bcrypt from 'bcrypt';

interface CreateUserRequest{
    name: string;
    email: string;
    password: string;
}

@Injectable()
export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(data: CreateUserRequest){
        // const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        // if (userAlreadyExists) {
        //     throw new Error('User email already exists');
        // }

        const user = new User({
            name: data.name,
            email: data.email,
            password: await bcrypt.hash(data.password, 10)
        });

    
        await this.userRepository.save(user);

        return user;
    }
}