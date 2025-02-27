import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [CreateUserUseCase]
})
export class UserModule {}
