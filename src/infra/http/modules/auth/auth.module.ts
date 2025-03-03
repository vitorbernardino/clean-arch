import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from 'src/modules/auth/strategies/local.strategy';
import { ValidateUserUseCase } from 'src/modules/auth/useCases/validateUserUseCase/validateUserUseCase';
import { SignInDtoValidateMiddleware } from './middleware/signInDtoValidate.middleware';
import { SignInUseCase } from 'src/modules/auth/useCases/signInUseCase/signInUseCase';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/modules/auth/strategies/jwt.strategy';

@Module({
    imports: [DatabaseModule, UserModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions:{expiresIn: process.env.JWT_EXPIRE},
        })
    ],
    controllers: [AuthController],
    providers: [LocalStrategy, ValidateUserUseCase, SignInUseCase, JwtStrategy],
})
export class AuthModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SignInDtoValidateMiddleware).forRoutes('/signIn');
    }
}
