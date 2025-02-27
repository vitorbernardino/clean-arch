import {Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt";
import { UserRepository } from "src/modules/user/repositories/UserRepository";

interface ValidateUserRequest{
    email: string;
    password: string;
}

@Injectable()
export class ValidateUserUseCase{
    constructor(private readonly userRepository: UserRepository){}

    async execute({email, password}: ValidateUserRequest){
        const user = await this.userRepository.findByEmail(email);

        if(!user) throw new UnauthorizedException('email ou senha incorretos');

        const isPasswordMatched = await compare(password, user.password);

        if(!isPasswordMatched) throw new UnauthorizedException('email ou senha incorretos');

        return user;
    }
}