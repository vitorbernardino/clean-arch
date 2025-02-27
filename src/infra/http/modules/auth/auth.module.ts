import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from 'src/modules/auth/strategies/local.strategy';
import { ValidateUserUseCase } from 'src/modules/auth/useCases/validateUserUseCase/validateUserUseCase';
import { SignInDtoValidateMiddleware } from './middleware/signInDtoValidate.middleware';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [AuthController],
    providers: [LocalStrategy, ValidateUserUseCase],
})
export class AuthModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SignInDtoValidateMiddleware).forRoutes('/signIn');
    }
}
