import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { createUserDto } from './dtos/createUserDto';
import { User } from 'src/modules/user/entities/User';
import { UserViewModel } from './viewModel/userViewModel';

@Controller('users')
export class UsersController {
    constructor(private createUserUseCase: CreateUserUseCase) {}


    @Post()
    async create(@Body() body: createUserDto) {
        const { name, email, password } = body;
        
        const user = await this.createUserUseCase.execute({ name, email, password });

        return UserViewModel.toHttp(user);
    }
}
